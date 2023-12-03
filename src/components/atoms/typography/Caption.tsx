import styled from "styled-components";
import {
  IColors,
  IColorSet,
  IGrayColorSet,
  ITypography,
} from "../../../assets/styles/theme-types";

export type TTextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";
type TCaptionLevel = 1 | 2 | 3;

const captionFontSize = [".875rem", "0.75rem", "0.625rem"];
const captionFontWeight = [500, 400, 400];
const captionLineHeight = ["1.3125rem", "1.125rem", "1rem"];

export const Caption = styled.p<{
  margin?: string;
  padding?: string;
  fontWeight?: number;
  textAlign?: TTextAlign;
  level?: TCaptionLevel;
  typographyPalette?: keyof ITypography;
  colorPalette?: keyof IColors;
  variant?: keyof IColorSet;
  grayVariant?: keyof IGrayColorSet;
  lineHeight?: string;
  textDecoration?: string;
  fontStyle?: string;
}>`
  font-size: ${({ level }) => (level ? captionFontSize[level - 1] : "0.75rem")};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight, level }) =>
    fontWeight ? fontWeight : level ? captionFontWeight[level - 1] : 400};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  line-height: ${({ lineHeight, level }) =>
    lineHeight ? lineHeight : level ? captionLineHeight[level - 1] : "1em"};
  color: ${({
    typographyPalette,
    colorPalette,
    theme,
    grayVariant,
    variant,
  }) =>
    typographyPalette
      ? theme.colors.typography[typographyPalette][variant || "main"]
      : variant
      ? theme.colors.typography.caption[variant]
      : colorPalette
      ? theme.colors[colorPalette]?.[grayVariant || variant || "main"]
      : theme.colors.typography.paragraph.main};
  margin: 0;
  text-decoration: ${({ textDecoration }) => textDecoration || null};
  font-style: ${({ fontStyle }) => fontStyle || null};
`;
