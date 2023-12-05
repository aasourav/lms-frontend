import React, { useState } from "react";
import { Button, Input } from "antd";
import { FlexContainer } from "../../src/components/atoms";
import { Label } from "../../src/components/atoms/typography/Label";
import { ILogin } from "../../src/types/types";
import { useAuthContext } from "../../src/context/AuthContext";
import getServerSideProps from "../../src/lib/getServerSidePropsForLogin";

const initialUserLogin: ILogin = {
  email: "",
  password: "",
};
const App: React.FC = () => {
  const [userLogin, setUserLogin] = useState<ILogin>(initialUserLogin);
  const { loginUserAction } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);

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
    <FlexContainer
      height="100dvh"
      alignItems="center"
      width="100%"
      justifyContent="center"
      flexFlow="column"
      gap="1rem"
    >
      <FlexContainer flexFlow="column" width="15%" gap=".5rem">
        <Label>Email</Label>
        <Input
          type="email"
          value={userLogin.email}
          onChange={(e) => onUserDataChange("email", e.target.value)}
        />
      </FlexContainer>
      <FlexContainer flexFlow="column" width="15%" gap=".5rem">
        <Label>Password</Label>
        <Input
          value={userLogin.password}
          onChange={(e) => onUserDataChange("password", e.target.value)}
          type="password"
        />
      </FlexContainer>
      <Button loading={loading} onClick={onLoginUser}>
        Submit
      </Button>
    </FlexContainer>
  );
};

export default App;
export { getServerSideProps };
