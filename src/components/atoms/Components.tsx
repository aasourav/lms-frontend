import styled from "styled-components";
import Container from "./box/Container";
import { Paragraph } from "./typography/Paragraph";

// space
export const Gap = styled.div<{ height?: string; width?: string }>`
  height: ${({ height }) => (height ? height : "0.25rem")};
  width: ${({ width }) => (width ? width : "0.25rem")};
`;

// Middle gap between two components
export const BodyGap = styled.div<{
  height?: string;
  width?: string;
  noNegativeMargin?: boolean;
}>`
  height: ${({ height }) => (height ? height : "0.5rem")};
  background: #f9f8ff;
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? "0" : "0 -1rem")};
`;

// Highlight line under heading
export const HeadingUnderline = styled.div`
  height: 2px;
  width: 5rem;
  background: ${({ theme }) => theme.colors.primary.main};
`;

// Initiate a section
export const Section = styled.div`
  padding: 1rem 0;
`;

export const TwoColumnsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

export const GridContainer = styled.div<{ columns: number; gap?: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap }) => gap || "0.5rem"};
`;

export const FlexContainer = styled(Container).attrs({ display: "flex" })``;

export const ErrorBox = styled.div`
  height: 1.875rem;
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.light4};
  display: flex;
  justify-content: center;
  align-items: center;
  ${Paragraph} {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ProductDiscountBadgeContainer = styled.div<{
  no_radius?: boolean;
}>`
  border-radius: 0.125rem;
  border-top-left-radius: ${({ no_radius }) =>
    no_radius ? "0rem" : "0.125rem"};

  border-bottom-left-radius: ${({ no_radius }) =>
    no_radius ? "0rem" : "0.125rem"};

  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 0.125rem 0.3125rem;
  p {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.125rem;
    font-style: normal;
    margin: 0;
    color: #fff;
  }
`;

export const ProductDiscountBadge = (text: string, noRadius?: boolean) => {
  return (
    <ProductDiscountBadgeContainer no_radius={noRadius}>
      <p>{text}&nbsp;off</p>
    </ProductDiscountBadgeContainer>
  );
};

const StyledDelText = styled.del`
  color: #999999;
`;

export const DelText = (text: string, fontSize?: string, color?: string) => {
  return <StyledDelText style={{ fontSize, color }}>{text}</StyledDelText>;
};
