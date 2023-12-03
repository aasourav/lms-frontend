import styled from "styled-components";
import {
  IColors,
  IColorSet,
  ITypography,
} from "../../../assets/styles/theme-types";
import { up } from "styled-breakpoints";

type TTextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";
export type TTitleLevel = 1 | 2 | 3;

const titleFontWeight = [600, 600, 500];

const titleMobileFontSize = ["1.125rem", "1rem", "1rem"];
const titleDesktopFontSize = ["1.25rem", "1.125rem", "1rem"];

const titleMobileLineHeight = ["1.625rem", "1.5rem", "1.5rem"];
const titleDesktopLineHeight = ["2rem", "1.625rem", "1.5rem"];

export const Title = styled.p<{
  margin?: string;
  padding?: string;
  fontWeight?: number;
  fontStyle?: string;
  textAlign?: TTextAlign;
  level?: TTitleLevel;
  typographyPalette?: keyof ITypography;
  colorPalette?: keyof IColors;
  variant?: keyof IColorSet;
  lineHeight?: string;
  cursor?: string;
}>`
  font-size: ${({ level }) =>
    level ? titleMobileFontSize[level - 1] : "1.125rem"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight, level }) =>
    fontWeight ? fontWeight : level ? titleFontWeight[level - 1] : 600};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  line-height: ${({ lineHeight, level }) =>
    lineHeight
      ? lineHeight
      : level
      ? titleMobileLineHeight[level - 1]
      : "1.625rem"};
  color: ${({ typographyPalette, colorPalette, theme, variant }) =>
    typographyPalette
      ? theme.colors.typography[typographyPalette][variant || "main"]
      : variant
      ? theme.colors.typography.title[variant]
      : colorPalette
      ? theme.colors[colorPalette]?.[variant || "main"]
      : theme.colors.typography.title.main};

  margin: 0;
  cursor: ${({ cursor }) => cursor || undefined};
  font-style: ${({ fontStyle }) => fontStyle || undefined};

  ${up("sm")} {
    font-size: ${({ level }) =>
      level ? titleDesktopFontSize[level - 1] : "1.25rem"};
    line-height: ${({ lineHeight, level }) =>
      lineHeight
        ? lineHeight
        : level
        ? titleDesktopLineHeight[level - 1]
        : "2rem"};
  }
`;
