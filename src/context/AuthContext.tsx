import { createContext, useCallback, useContext, useState } from "react";
import { ILogin, IUserData } from "../types/types";
import { useRouter } from "next/router";
import { loginUserApi, logoutUserApi } from "../api/user";
import { notification } from "antd";

interface IAuthContextProps {
  isAuthenticated: boolean;
  authUser: IUserData | null;
  setAuthentication: (isAuth: boolean, authUser: IUserData) => void;
  logoutUser: () => Promise<void>;
  loginUserAction: (loginInfo: ILogin) => Promise<void>;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

const AuthContextProvider: React.FC<{
  children: React.ReactNode;
  isAuthenticated: boolean;
  user: IAuthContextProps["authUser"];
}> = ({ children, isAuthenticated, user }) => {
  const router = useRouter();
  const [authenticated, setIsAuthenticated] =
    useState<boolean>(isAuthenticated);
  const [authUser, setAuthUser] = useState<IUserData | null>(user);

  const setAuthentication = useCallback(
    (isAuth: boolean, authUsr: IUserData | null) => {
      setAuthUser(authUsr);
      setIsAuthenticated(isAuth);
    },
    []
  );

  const loginUserAction: IAuthContextProps["loginUserAction"] = useCallback(
    async (loginInfo) => {
      try {
        const { data } = await loginUserApi(loginInfo);
        setAuthentication(true, data);
        router.replace(`/dashboard`);
      } catch (err: any) {
        notification["error"]({
          message: err.message,
          placement: "topRight",
        });
      }
    },
    [router, setAuthentication]
  );

  const logoutUser: IAuthContextProps["logoutUser"] = useCallback(async () => {
    try {
      await logoutUserApi();
      setAuthentication(false, null);
    } catch (err: any) {
      notification["error"]({
        message: err.message,
        placement: "topRight",
      });
    }
  }, [setAuthentication]);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuthenticated: authenticated,
        setAuthentication,
        loginUserAction,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within adn AuthContextProvider"
    );
  }
  return context;
};
