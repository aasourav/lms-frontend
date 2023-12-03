export interface IColorSet {
  main: string;
  light1?: string;
  light2?: string;
  light3?: string;
  light4?: string;
  dark1?: string;
  dark2?: string;
  dark3?: string;
  dark4?: string;
}

export interface IGrayColorSet {
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
}

interface IBadgeColorSet {
  text: string;
  background: string;
}

export interface ITypography {
  heading: IColorSet;
  title: IColorSet;
  subtitle: IColorSet;
  paragraph: IColorSet;
  label: IColorSet;
  inverse: IColorSet;
  caption: IColorSet;
  menu: IColorSet;
}

export interface IPalettes {
  palette1: IColorSet;
  palette2: IColorSet;
  palette3: IColorSet;
  palette4: IColorSet;
}

export interface IBackground {
  body1: IColorSet;
  body2: IColorSet;
  body3: IColorSet;
  backdrop: IColorSet;
  footer: IColorSet;
  navbar: IColorSet;
}

interface IBadges {
  badge1: IBadgeColorSet;
  badge2: IBadgeColorSet;
  badge3: IBadgeColorSet;
  badge4: IBadgeColorSet;
}

export interface IColors {
  primary: IColorSet;
  secondary?: IColorSet;
  tertiary?: IColorSet;
  borders?: IColorSet;
  success: IColorSet;
  warning: IColorSet;
  danger: IColorSet;
  info?: IColorSet;
  grays: IGrayColorSet;
  typography: ITypography;
  palettes: IPalettes;
  background: IBackground;
  body?: IColorSet;
  backdrop?: IColorSet;
  label?: IColorSet;
  badge: IBadges;
}

export interface IEngazeThemeColors extends IColors {}

export interface IBreakPointsInt {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface IZIndex {
  zIndex1: number;
  zIndex2: number;
  zIndex3?: number;
  zIndex4?: number;
  zIndex5?: number;
}

export interface IShadows {
  shadow1: string;
  shadow2: string;
  shadow3?: string;
  shadow4?: string;
  shadow5?: string;
}

export interface ITheme {
  colors: IEngazeThemeColors;
  zIndex: IZIndex;
  shadows: IShadows;
}

export interface IEngazeTheme extends ITheme {}
