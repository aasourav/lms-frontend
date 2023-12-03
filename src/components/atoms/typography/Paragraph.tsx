import styled from "styled-components";
import {
  IColors,
  IColorSet,
  IGrayColorSet,
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
export type TParagraphLevel = 1 | 2 | 3 | 4;

const paragraphFontWeight = [400, 400, 400, 400, 400, 400];

const paragraphMobileFontSize = ["1rem", "0.875rem", "0.75rem", "0.75rem"];
const paragraphDesktopFontSize = ["1.125rem", "1rem", "0.875rem", "0.75rem"];

const paragraphMobileLineHeight = [
  "1.5rem",
  "1.313rem",
  "1.125rem",
  "1.125rem",
];
const paragraphDesktopLineHeight = [
  "1.625rem",
  "1.5rem",
  "1.313rem",
  "1.125rem",
];

export const Paragraph = styled.p<{
  margin?: string;
  padding?: string;
  whiteSpace?: string;
  zIndex?: number;
  fontWeight?: number;
  textAlign?: TTextAlign;
  level?: TParagraphLevel;
  typographyPalette?: keyof ITypography;
  colorPalette?: keyof IColors;
  grayVariant?: keyof IGrayColorSet;
  variant?: keyof IColorSet;
  cursor?: string;
  lineHeight?: string;
  opacity?: number;
  textDecoration?: string;
  fontStyle?: string;
}>`
  font-size: ${({ level }) =>
    level ? paragraphMobileFontSize[level - 1] : "1rem"};
  margin: ${({ margin }) => margin};
  white-space: ${({ whiteSpace }) => whiteSpace};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight, level }) =>
    fontWeight ? fontWeight : level ? paragraphFontWeight[level - 1] : 400};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  line-height: ${({ lineHeight, level }) =>
    lineHeight
      ? lineHeight
      : level
      ? paragraphMobileLineHeight[level - 1]
      : "1.5rem"};
  color: ${({
    typographyPalette,
    colorPalette,
    theme,
    variant,
    grayVariant,
  }) =>
    typographyPalette
      ? theme.colors.typography[typographyPalette][variant || "main"]
      : colorPalette
      ? theme.colors[colorPalette]?.[grayVariant || variant || "main"]
      : variant
      ? theme.colors.typography.paragraph[variant]
      : theme.colors.typography.paragraph.main};

  margin: 0;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  text-decoration: ${({ textDecoration }) => textDecoration || null};
  font-style: ${({ fontStyle }) => fontStyle || null};
  cursor: ${({ cursor }) => cursor || undefined};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : undefined)};

  ${up("sm")} {
    font-size: ${({ level }) =>
      level ? paragraphDesktopFontSize[level - 1] : "1.125rem"};
    line-height: ${({ lineHeight, level }) =>
      lineHeight
        ? lineHeight
        : level
        ? paragraphDesktopLineHeight[level - 1]
        : "1.625rem"};
  }
`;
