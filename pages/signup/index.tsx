import React, { useState } from "react";
import { FlexContainer } from "../../src/components/atoms";
import { Label } from "../../src/components/atoms/typography/Label";
import { Button, Input, Modal, notification } from "antd";
import styled from "styled-components";
import Head from "next/head";
import { IActivationUser, ISignUp } from "../../src/types/types";
import { activeUserApi, userSignUpApi } from "../../src/api/user";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../src/components/molecules/Header";
import { Heading } from "../../src/components/atoms/typography/Heading";

const MainContainer = styled(FlexContainer)`
  background: rgb(233, 251, 248);
  background: linear-gradient(
    90deg,
    rgba(233, 251, 248, 1) 0%,
    rgba(0, 104, 255, 0.05) 100%
  );
  /* background: blue; */
  .form {
    border: 2px solid gray;
    padding: 2rem;
    border-radius: 15px;
    background-color: white;
  }
`;

const initialUser: ISignUp = {
  name: "",
  email: "",
  password: "",
};

const initialActiveUser: IActivationUser = {
  activationCode: "",
  activationToken: "",
};

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState<ISignUp>(initialUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [verification, setVerification] =
    useState<IActivationUser>(initialActiveUser);
  const [isVerificationModal, setIsVerificationModal] =
    useState<boolean>(false);

  const onUserDataChange = (name: keyof ISignUp, value: string) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onActiveUserChange = (name: keyof IActivationUser, value: string) => {
    setVerification((prev) => ({ ...prev, [name]: value }));
  };

  const onSignUpSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await userSignUpApi(user);
      onActiveUserChange("activationToken", data.activationToken);
      notification.open({
        type: "info",
        message: data.message,
      });
      setIsVerificationModal(true);
      setUser(initialUser);
    } catch (err: any) {
      notification.open({
        type: "error",
        message: err?.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  const onActivationCodeSubmit = async () => {
    try {
      setLoading(true);
      await activeUserApi(verification);
      notification.open({
        type: "success",
        message: "Successfully created account",
      });
      setVerification(initialActiveUser);
      setIsVerificationModal(false);
      router.push("/login");
    } catch (err: any) {
      notification.open({
        type: "error",
        message: err?.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer
      width="100%"
      height="100dvh"
      alignItems="center"
      flexFlow="column"
    >
      <Head>
        <title>Sign Up</title>
      </Head>
      <Header />
      <FlexContainer gap="7rem" alignItems="center" margin="5rem 0 0 0">
        <Image
          src="/landing/hero-left.png"
          width={650}
          height={600}
          alt="hero photo"
        />
        <FlexContainer>
          <FlexContainer
            className="form"
            flexFlow="column"
            gap="1rem"
            alignItems="center"
          >
            <Heading level={6}>Sign up</Heading>
            <FlexContainer flexFlow="column" width="300px" gap=".5rem">
              <Label>Name</Label>
              <Input
                value={user.name}
                onChange={(e) => onUserDataChange("name", e.target.value)}
              />
            </FlexContainer>
            <FlexContainer flexFlow="column" width="300px" gap=".5rem">
              <Label>Email</Label>
              <Input
                value={user.email}
                onChange={(e) => onUserDataChange("email", e.target.value)}
                type="email"
              />
            </FlexContainer>
            <FlexContainer flexFlow="column" width="300px" gap=".5rem">
              <Label>Password</Label>
              <Input
                value={user.password}
                onChange={(e) => onUserDataChange("password", e.target.value)}
                type="password"
              />
            </FlexContainer>
            <FlexContainer width="100%" justifyContent="flex-end">
              <Button type="primary" loading={loading} onClick={onSignUpSubmit}>
                SignUp
              </Button>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <Modal
        onCancel={() => setIsVerificationModal(false)}
        open={isVerificationModal}
        onOk={onActivationCodeSubmit}
        confirmLoading={loading}
      >
        <FlexContainer flexFlow="column" width="100%" gap=".5rem">
          <Label>Verification number</Label>
          <Input
            value={verification.activationCode}
            onChange={(e) =>
              onActiveUserChange("activationCode", e.target.value)
            }
            type="password"
          />
        </FlexContainer>
      </Modal>
    </MainContainer>
  );
};

export default SignUp;
