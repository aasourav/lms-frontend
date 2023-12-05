import { AxiosResponse } from "axios";
import { ILogin, IUserData } from "../types/types";
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
