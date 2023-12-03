import React, { Component, PropsWithChildren } from "react";
import styled from "styled-components";
import { IColorSet, ITypography } from "../../../assets/styles/theme-types";
import { up } from "styled-breakpoints";

type TTextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";
type THeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingMobileFontSize = [
  "1.75rem",
  "1.5rem",
  "1.25rem",
  "1.25rem",
  "1.25rem",
  "1.25rem",
];

const headingMobileLineHeight = [
  "2rem",
  "1.875rem",
  "1.75rem",
  "1.75rem",
  "1.75rem",
  "1.75rem",
];

const headingDesktopFontSize = [
  "3.75rem",
  "3rem",
  "2.75rem",
  "2.25rem",
  "1.75rem",
  "1.5rem",
];

const headingDesktopLineHeight = [
  "4.5rem",
  "3.5rem",
  "3.25rem",
  "2.75rem",
  "2.375rem",
  "2rem",
];

const headingTabFontSize = [
  "2.75rem",
  "2.75rem",
  "2.25rem",
  "2.25rem",
  "1.75rem",
  "1.5rem",
];

const headingTabLineHeight = [
  "3.25rem",
  "3.25rem",
  "2.75rem",
  "2.75rem",
  "2.25rem",
  "2rem",
];

const headingFontWeight = [700, 700, 600, 600, 600, 500];

const StyledHeading = styled(Component)<{
  margin?: string;
  padding?: string;
  fontWeight?: number;
  textAlign?: TTextAlign;
  lineHeight?: string;
  level?: THeadingLevel;
  typographyPalette?: keyof ITypography;
  variant?: keyof IColorSet;
}>`
  font-size: ${({ level }) =>
    level ? headingMobileFontSize[level - 1] : "1.75rem"};
  line-height: ${({ lineHeight, level }) =>
    lineHeight
      ? lineHeight
      : level
      ? headingMobileLineHeight[level - 1]
      : "2rem"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight, level }) =>
    fontWeight ? fontWeight : level ? headingFontWeight[level - 1] : 600};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  color: ${({ typographyPalette, theme, variant }) =>
    typographyPalette
      ? theme.colors.typography[typographyPalette][variant || "main"]
      : variant
      ? theme.colors.typography.heading[variant]
      : theme.colors.typography.heading.main};
  margin: 0;

  ${up("sm")} {
    font-size: ${({ level }) =>
      level ? headingTabFontSize[level - 1] : "2.75rem"};
    line-height: ${({ lineHeight, level }) =>
      lineHeight
        ? lineHeight
        : level
        ? headingTabLineHeight[level - 1]
        : "3.25rem"};
  }

  ${up("md")} {
    font-size: ${({ level }) =>
      level ? headingDesktopFontSize[level - 1] : "3.75rem"};
    line-height: ${({ lineHeight, level }) =>
      lineHeight
        ? lineHeight
        : level
        ? headingDesktopLineHeight[level - 1]
        : "4.5rem"};
  }
`;

interface IProps {
  margin?: string;
  padding?: string;
  fontWeight?: number;
  textAlign?: TTextAlign;
  level?: THeadingLevel;
  className?: string;
  typographyPalette?: keyof ITypography;
  variant?: keyof IColorSet;
  ref?: any;
}

const Heading: React.FC<PropsWithChildren<IProps>> = (props) => {
  return (
    <StyledHeading
      className={props.className}
      as={`h${props.level || 1}`}
      ref={props.ref}
      {...props}
    >
      {props.children}
    </StyledHeading>
  );
};

export { Heading };
