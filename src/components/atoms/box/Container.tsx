import styled from "styled-components";
import React, { PropsWithChildren } from "react";
import { up } from "styled-breakpoints";

interface IProps {
  display?: string;
  flexFlow?: string;
  flexFlowUpXs?: string;
  flexFlowUpSm?: string;
  flexFlowUpMd?: string;
  flexFlowUpSl?: string;
  flexFlowUpLg?: string;
  flex?: number | string;
  padding?: string;
  paddingUpXs?: string;
  paddingUpSm?: string;
  paddingUpMd?: string;
  paddingUpSl?: string;
  paddingUpLg?: string;
  margin?: string;
  marginUpXs?: string;
  marginUpMd?: string;
  marginUpSm?: string;
  marginUpSl?: string;
  marginUpLg?: string;
  width?: string;
  widthUpXs?: string;
  widthUpSm?: string;
  widthUpMd?: string;
  widthUpSl?: string;
  widthUpLg?: string;
  flexDirection?: string;
  height?: string;
  background?: string;
  justifyContent?: string;
  justifyContentUpSm?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?: string;
  gapUpXs?: string;
  gapUpSm?: string;
  gapUpMd?: string;
  gapUpSl?: string;
  gapUpLg?: string;
  className?: string;
  order?: number;
}

const MyDiv = styled.div<IProps>`
  display: ${({ display }) => display};
  flex-flow: ${({ flexFlow, display }) =>
    display ? (flexFlow === "column" ? "column" : "row") : null};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  flex-direction: ${({ flexDirection }) => flexDirection};
  flex: ${({ flex }) => flex};
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};

  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};

  background-color: ${({ background, theme }) =>
    background ? (theme.colors as any)[background] : null};

  justify-content: ${({ justifyContent }) => justifyContent || null};
  justify-items: ${({ justifyItems }) => justifyItems || null};

  align-content: ${({ alignContent }) => alignContent || null};
  align-items: ${({ alignItems }) => alignItems || null};

  gap: ${({ gap }) => gap || null};
  order: ${({ order }) => order || null};

  ${up("xs")} {
    width: ${({ widthUpXs }) => widthUpXs};
    flex-flow: ${({ flexFlowUpXs }) => flexFlowUpXs};
    gap: ${({ gapUpXs }) => gapUpXs};
    padding: ${({ paddingUpXs }) => paddingUpXs};
    margin: ${({ marginUpXs }) => marginUpXs};
  }

  ${up("sm")} {
    width: ${({ widthUpSm }) => widthUpSm};
    flex-flow: ${({ flexFlowUpSm }) => flexFlowUpSm};
    gap: ${({ gapUpSm }) => gapUpSm};
    padding: ${({ paddingUpSm }) => paddingUpSm};
    margin: ${({ marginUpSm }) => marginUpSm};
    justify-content: ${({ justifyContentUpSm }) => justifyContentUpSm};
  }

  ${up("md")} {
    width: ${({ widthUpMd }) => widthUpMd};
    flex-flow: ${({ flexFlowUpMd }) => flexFlowUpMd};
    gap: ${({ gapUpMd }) => gapUpMd};
    padding: ${({ paddingUpMd }) => paddingUpMd};
    margin: ${({ marginUpMd }) => marginUpMd};
  }

  ${up("sl")} {
    width: ${({ widthUpSl }) => widthUpSl};
    flex-flow: ${({ flexFlowUpSl }) => flexFlowUpSl};
    gap: ${({ gapUpSl }) => gapUpSl};
    padding: ${({ paddingUpSl }) => paddingUpSl};
    margin: ${({ marginUpSl }) => marginUpSl};
  }

  ${up("lg")} {
    width: ${({ widthUpLg }) => widthUpLg};
    flex-flow: ${({ flexFlowUpLg }) => flexFlowUpLg};
    gap: ${({ gapUpLg }) => gapUpLg};
    padding: ${({ paddingUpLg }) => paddingUpLg};
    margin: ${({ marginUpLg }) => marginUpLg};
  }
`;

const Container: React.FC<PropsWithChildren<IProps>> = (props) => {
  const {
    display = "block",
    flexFlow,
    flex,
    padding,
    paddingUpLg,
    paddingUpSm,
    paddingUpXs,
    marginUpLg,
    marginUpSm,
    marginUpXs,
    margin,
    width,
    height,
    background,
    justifyContent,
    justifyContentUpSm,
    justifyItems,
    alignContent,
    flexFlowUpLg,
    gapUpLg,
    widthUpLg,
    flexFlowUpSm,
    flexFlowUpMd,
    gapUpMd,
    marginUpMd,
    paddingUpMd,
    widthUpMd,
    gapUpSm,
    widthUpSm,
    flexFlowUpXs,
    gapUpXs,
    widthUpXs,
    alignItems,
    flexWrap,
    gap,
    className,
    flexDirection,
    order,
  } = props;
  return (
    <MyDiv
      flex={flex}
      display={display}
      marginUpLg={marginUpLg}
      marginUpSm={marginUpSm}
      marginUpXs={marginUpXs}
      paddingUpLg={paddingUpLg}
      paddingUpSm={paddingUpSm}
      paddingUpXs={paddingUpXs}
      flexFlowUpLg={flexFlowUpLg}
      justifyContentUpSm={justifyContentUpSm}
      paddingUpMd={paddingUpMd}
      flexFlowUpMd={flexFlowUpMd}
      marginUpMd={marginUpMd}
      widthUpMd={widthUpMd}
      gapUpMd={gapUpMd}
      gapUpLg={gapUpLg}
      widthUpLg={widthUpLg}
      flexFlowUpSm={flexFlowUpSm}
      gapUpSm={gapUpSm}
      flexFlowUpXs={flexFlowUpXs}
      widthUpSm={widthUpSm}
      gapUpXs={gapUpXs}
      widthUpXs={widthUpXs}
      flexFlow={flexFlow}
      flexDirection={flexDirection}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      background={background}
      justifyContent={justifyContent}
      justifyItems={justifyItems}
      alignContent={alignContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      gap={gap}
      className={className}
      order={order}
    >
      {props.children}
    </MyDiv>
  );
};

export default Container;
