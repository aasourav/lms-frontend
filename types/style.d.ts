import "styled-components";
import { IEngazeTheme } from "../src/assets/styles/theme-types";

declare module "styled-components" {
  export interface DefaultTheme extends IEngazeTheme {
    additional?: any;
  }
}
