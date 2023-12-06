import { AxiosResponse } from "axios";
import { IActivationUser, ILogin, ISignUp, IUserData } from "../types/types";
import { privateApiRequest, publicApiRequest } from "./apiRequest";

export const loginUserApi = async (data: ILogin) => {
  return new Promise<AxiosResponse<IUserData>>((resolve, reject) => {
    publicApiRequest
      .post("/login", data)
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const logoutUserApi = async () => {
  return new Promise<AxiosResponse<any>>((resolve, reject) => {
    privateApiRequest
      .post("/logout")
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const refreshTokenApi = async () => {
  return new Promise<AxiosResponse<any>>((resolve, reject) => {
    privateApiRequest
      .post("/refresh-token")
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const userSignUpApi = async (data: ISignUp) => {
  return new Promise<
    AxiosResponse<{ message: string; activationToken: string }>
  >((resolve, reject) => {
    privateApiRequest
      .post("/registration", data)
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};

export const activeUserApi = async (data: IActivationUser) => {
  return new Promise<AxiosResponse<IUserData>>((resolve, reject) => {
    privateApiRequest
      .post("/activate-user", data)
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};
