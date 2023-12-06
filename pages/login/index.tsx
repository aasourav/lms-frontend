import React, { useState } from "react";
import { Button, Input } from "antd";
import { FlexContainer } from "../../src/components/atoms";
import { Label } from "../../src/components/atoms/typography/Label";
import { ILogin } from "../../src/types/types";
import { useAuthContext } from "../../src/context/AuthContext";
import getServerSideProps from "../../src/lib/getServerSidePropsForLogin";
import styled from "styled-components";
import Image from "next/image";
import Header from "../../src/components/molecules/Header";
import { Heading } from "../../src/components/atoms/typography/Heading";
import { useRouter } from "next/router";

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

const initialUserLogin: ILogin = {
  email: "",
  password: "",
};
const App: React.FC = () => {
  const [userLogin, setUserLogin] = useState<ILogin>(initialUserLogin);
  const { loginUserAction } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onUserDataChange = (name: keyof ILogin, value: string) => {
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onLoginUser = async () => {
    try {
      setLoading(true);
      await loginUserAction(userLogin);
    } catch (err: any) {
    } finally {
      setLoading(false);
      setUserLogin(initialUserLogin);
    }
  };

  return (
    <MainContainer height="100dvh" flexFlow="column">
      <Header />
      <FlexContainer
        width="100%"
        alignItems="center"
        justifyContent="center"
        margin="7rem 0 0 0"
        gap="5rem"
      >
        <Image
          src="/landing/hero-left.png"
          width={650}
          height={600}
          alt="hero photo"
        />
        <FlexContainer
          alignItems="center"
          className="form"
          justifyContent="center"
          flexFlow="column"
          gap="1rem"
        >
          <Heading level={6}>Login</Heading>
          <FlexContainer flexFlow="column" width="300px" gap=".5rem">
            <Label>Email</Label>
            <Input
              type="email"
              value={userLogin.email}
              onChange={(e) => onUserDataChange("email", e.target.value)}
            />
          </FlexContainer>
          <FlexContainer flexFlow="column" width="300px" gap=".5rem">
            <Label>Password</Label>
            <Input
              value={userLogin.password}
              onChange={(e) => onUserDataChange("password", e.target.value)}
              type="password"
            />
          </FlexContainer>
          <FlexContainer justifyContent="flex-end" width="100%" gap="1rem">
            <Button loading={loading} onClick={() => router.push("/signup")}>
              Sign up
            </Button>
            <Button loading={loading} onClick={onLoginUser} type="primary">
              Submit
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </MainContainer>
  );
};

export default App;
export { getServerSideProps };
