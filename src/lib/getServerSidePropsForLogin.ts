// import Cookies from "cookies";
import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
import { refreshTokenApi } from "../api/user";
// import config from "../../settings/config";
// import { COOKIE_KEYS } from "../../shared/types/cookies";
// import { refreshAdminApi } from "../api/adminApi";
// import { DASHBOARD } from "../routes/routes";

const redirectToDashboard = {
  redirect: {
    destination: "/dashboard",
    permanent: false,
  },
};

const ACCESS_TOK = "zIErateLeHILi$$$maNtaCKELant!@%EOunCETeNUmisMarcABySTrAc";

const getServerSidePropsForLogin = async (
  context: GetServerSidePropsContext
) => {
  const allCookies = context.req.cookies;
  const adminAccessCookie = allCookies["access_token"];
  const adminRefreshCookie = allCookies["refresh_token"];

  if (adminAccessCookie) {
    try {
      const token = adminAccessCookie.split(" ")[0];

      const verified = jwt.verify(token, ACCESS_TOK) as any;

      if (verified) {
        // Access token not expired, redirect to dashboard
        return redirectToDashboard;
      }
    } catch (error) {
      // Access token expired. Refresh tokens
      try {
        // access token expired
        if (adminRefreshCookie) {
          await refreshTokenApi();

          // set newly refreshed cookies
          //   const cookies = new Cookies(context.req, context.res);

          //   cookies.set(
          //     ACCESS_TOK,
          //     data.accessToken,
          //     config.ADMIN_COOKIE_OPTIONS
          //   );

          //   cookies.set(
          //     COOKIE_KEYS.authRefreshToken,
          //     data.refreshToken,
          //     config.ADMIN_COOKIE_OPTIONS
          //   );

          return redirectToDashboard;
        }
      } catch (err) {}
    }
  }

  // Access token not found, user stays on the login page
  return {
    props: {},
  };
};

export default getServerSidePropsForLogin;
