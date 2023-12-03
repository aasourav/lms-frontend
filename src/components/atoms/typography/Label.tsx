import styled from "styled-components";
import React from "react";
import { IColorSet } from "../../../assets/styles/theme-types";

type TTextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";
export type TLabelLevel = 1 | 2 | 3;

const labelFontSize = ["1rem", "0.875rem", "0.75rem"];
const labelFontWeight = [600, 500, 400];
const labelLineHeight = ["1.25rem", "1.125rem", "1rem"];

export const Label = styled.p<{
  margin?: string;
  padding?: string;
  fontWeight?: number;
  textAlign?: TTextAlign;
  level?: TLabelLevel;
  variant?: keyof IColorSet;
  lineHeight?: string;
}>`
  font-size: ${({ level }) => (level ? labelFontSize[level - 1] : "1rem")};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight, level }) =>
    fontWeight ? fontWeight : level ? labelFontWeight[level - 1] : 500};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  line-height: ${({ lineHeight, level }) =>
    lineHeight ? lineHeight : level ? labelLineHeight[level - 1] : "1.25rem"};
  color: ${({ theme, variant }) =>
    theme.colors.label
      ? theme.colors.label[variant || "main"]
      : theme.colors.typography.title[variant || "main"]};
  margin: 0;
  span {
    color: ${({ theme }) => theme.colors.danger.main};
  }
`;

interface IRequiredLabel {
  text: string;
  required?: boolean;
  margin?: string;
  padding?: string;
  fontWeight?: number;
  textAlign?: TTextAlign;
  level?: TLabelLevel;
  variant?: keyof IColorSet;
  lineHeight?: string;
}

export const FormLabel: React.FC<IRequiredLabel> = ({
  required,
  text,
  fontWeight,
  level,
  lineHeight,
  margin,
  padding,
  textAlign,
  variant,
}) => {
  return (
    <Label
      fontWeight={fontWeight}
      level={level}
      lineHeight={lineHeight}
      margin={margin}
      padding={padding}
      textAlign={textAlign}
      variant={variant}
    >
      {text}
      {required ? <span>*</span> : null}
    </Label>
  );
};
