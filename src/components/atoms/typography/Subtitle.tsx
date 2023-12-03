import styled from "styled-components";
import { IColorSet, ITypography } from "../../../assets/styles/theme-types";

type TTextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";
type TSubtitleLevel = 1 | 2 | 3;

const subtitleFontSize = ["0.875rem", "0.75rem", "0.625rem"];
const subtitleFontWeight = [400, 400, 400];
const subtitleLineHeight = ["1.313rem", "1.125rem", "1rem"];

export const Subtitle = styled.p<{
  margin?: string;
  padding?: string;
  fontWeight?: number;
  textAlign?: TTextAlign;
  level?: TSubtitleLevel;
  typographyPalette?: keyof ITypography;
  variant?: keyof IColorSet;
  lineHeight?: string;
}>`
  font-size: ${({ level }) =>
    level ? subtitleFontSize[level - 1] : "0.875rem"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight, level }) =>
    fontWeight ? fontWeight : level ? subtitleFontWeight[level - 1] : 400};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  line-height: ${({ lineHeight, level }) =>
    lineHeight
      ? lineHeight
      : level
      ? subtitleLineHeight[level - 1]
      : "1.313rem"};
  color: ${({ typographyPalette, theme, variant }) =>
    typographyPalette
      ? theme.colors.typography[typographyPalette][variant || "main"]
      : variant
      ? theme.colors.typography.subtitle[variant]
      : theme.colors.typography.subtitle.main};
  margin: 0;
`;
