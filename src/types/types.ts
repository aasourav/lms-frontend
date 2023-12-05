export const USER_ROLES = {
  ADMIN: "admin" as const,
  SUPER_ADMIN: "super-admin" as const,
  USER: "user" as const,
};

export const UserRoles = Object.values(USER_ROLES);
export type TUSER_ROLES = (typeof UserRoles)[number];

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserData {
  _id: string;
  name: string;
  username: string;
  avatar: string;
  phoneNumber: string;
  email: string;
  role: TUSER_ROLES;
}
