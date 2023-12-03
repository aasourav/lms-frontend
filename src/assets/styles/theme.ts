import { createTheme } from "styled-breakpoints";
import { IEngazeTheme } from "./theme-types";

const breakpoints = createTheme({
  xs: "600px",
  sm: "960px",
  md: "1280px",
  sl: "1440px",
  lg: "1920px",
  xl: "2600px",
});

export const theme: IEngazeTheme = {
  colors: {
    primary: {
      main: "#EF4F61",
      light1: "#FC7988",
      light2: "#FFA1AB",
      light3: "#FFC7CE",
      light4: "#FFEEF0",
      dark1: "#CD3A4B",
      dark2: "#AB2937",
      dark3: "#891A27",
      dark4: "#670F19",
    },
    secondary: {
      main: "#48A0AC",
      light1: "#6DD1DF",
      light2: "#8EF1FF",
      light3: "#CFF9FF",
      light4: "#F3FDFF",
      dark1: "#2A7079",
      dark2: "#245157",
      dark3: "#1A3236",
      dark4: "#0B1314",
    },
    tertiary: {
      main: "#40A9FF",
      light1: "#9CD5FF",
      light2: "#E6F7FF",
      dark1: "#1A98FF",
      dark2: "#0D92FF",
    },
    borders: {
      main: "#C4C3C3",
      light1: "#E1E0E0",
      light2: "#E8E8E8",
      dark1: "#B8B7B7",
      dark2: "#AEADAD",
    },
    success: {
      main: "#12B76A",
      light1: "#B2FFCD",
      light2: "#EBFFF2",
      dark1: "#00B05E",
      dark2: "#029651",
    },
    warning: {
      main: "#F79009",
      light1: "#FFD8A6",
      light2: "#FFEDD6",
      dark1: "#F08800",
      dark2: "#E18000",
    },
    danger: {
      main: "#CF1322",
      light1: "#FDA29B",
      light2: "#FEE4E2",
      dark1: "#C51321",
      dark2: "#A4101B",
    },
    info: {
      main: "#E1E0E0",
      light1: "#5A5A5A",
      dark1: "#C4C3C3",
    },
    body: {
      main: "#FFFFFF",
      light1: "#F8F8F8",
      light2: "#F6F8F9",
      dark1: "#F4F3F6",
    },
    backdrop: {
      main: "#FFFFFF",
      light1: "#F8F8F8",
      dark1: "#F4F3F6",
    },
    label: {
      main: "#3F4451",
      light1: "#F8F8F8",
      dark1: "#F4F3F6",
    },
    grays: {
      gray1: "#FFFFFF",
      gray2: "#FDFDFD",
      gray3: "#F5F5F5",
      gray4: "#E8E8E8",
      gray5: "#D9D9D9",
      gray6: "#BFBFBF",
      gray7: "#8C8C8C",
      gray8: "#595959",
      gray9: "#262626",
      gray10: "#000000",
    },
    typography: {
      heading: {
        main: "#263B5E",
        light1: "#2F4874",
        light2: "#355282",
        dark1: "#22385E",
        dark2: "#172F56",
      },
      title: {
        main: "#2D3039",
        light1: "#363A45",
        light2: "#3F4451",
        dark1: "#282D39",
        dark2: "#222939",
      },
      subtitle: {
        main: "#5D5B5B",
        light1: "#676565",
        light2: "#716F6F",
        dark1: "#515151",
        dark2: "#4D4C4C",
      },
      paragraph: {
        main: "#3F4451",
        light1: "#484D5B",
        light2: "#515767",
        dark1: "#313A51",
        dark2: "#2D3751",
      },
      label: {
        main: "#3F4451",
        light1: "#8C8C8C",
        light2: "#FAFAFA",
        dark1: "#2D3751",
        dark2: "#203059",
      },
      inverse: {
        main: "#FFFFFF",
        dark1: "#F5F5F5",
        dark2: "#EBEBEB",
      },
      caption: {
        main: "#D6D6D6",
        light1: "#EBEBEB",
        dark1: "#C2C2C2",
      },
      menu: {
        main: "#2D3039",
        dark1: "#272B39",
        light1: "#5A5E6C",
      },
    },
    palettes: {
      palette1: {
        main: "#A9D5DB",
        light1: "#C5E3E7",
        dark1: "#B7DCE1",
      },
      palette2: {
        main: "#F58F8F",
        light1: "#F8B4B4",
        dark1: "#F6A2A2",
      },
      palette3: {
        main: "#FFC400",
        light1: "#FFFBE6",
        dark1: "#FFF1B8",
      },
      palette4: {
        main: "#324358",
        light1: "#44566c",
        dark1: "#44566c",
      },
    },
    badge: {
      badge1: {
        text: "#027A48",
        background: "#ECFDF3",
      },
      badge2: {
        text: "#B54708",
        background: "#FFFAEB",
      },
      badge3: {
        text: "#B42318",
        background: "#FEF3F2",
      },
      badge4: {
        text: "#344054",
        background: "#F2F4F7",
      },
    },
    background: {
      body1: {
        main: "#FFFFFF",
        light1: "#FFFFFF",
        dark1: "#F8F8F8",
        dark2: "#F4F3F6",
      },
      body2: {
        main: "#EBF6FF",
      },
      body3: {
        main: "#FFF2F2",
      },
      backdrop: {
        main: "#2D3039",
      },
      footer: {
        main: "#262626",
      },
      navbar: {
        main: "#324358",
      },
    },
  },

  zIndex: {
    zIndex1: 1,
    zIndex2: 10,
    zIndex3: 100,
    zIndex4: 1000,
    zIndex5: 10000,
  },
  shadows: {
    shadow1: "rgba(0, 0, 0, 0.15)",
    shadow2: "rgba(0, 0, 0, 0.15)",
  },
  ...breakpoints,
};
