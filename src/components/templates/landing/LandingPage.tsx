import React from "react";
import { FlexContainer } from "../../atoms";
import Header from "../../molecules/Header";
import styled from "styled-components";
import Image from "next/image";
import { MaxWidthContainer, PaddedContainer } from "../../molecules/Components";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { Input } from "antd";

const { Search } = Input;

const MainContainer = styled(FlexContainer)`
  background-image: url("/landing/hero-bg.jpg");
  background-size: auto;
  height: 100dvh;
`;

const LandingPage: React.FC = () => {
  return (
    <MainContainer flexFlow="column" width="100%">
      <Header />
      <PaddedContainer>
        <MaxWidthContainer>
          <FlexContainer gap="6.25rem" alignItems="center">
            <FlexContainer
              width="50%"
              alignItems="center"
              justifyContent="center"
              margin="5rem 0 0 0"
            >
              <Image
                src="/landing/hero-left.png"
                width={650}
                height={600}
                alt="hero photo"
              />
            </FlexContainer>
            <FlexContainer flexFlow="column" width="50%" gap="2rem">
              <Heading level={1}>
                Improve your online learning experience better instantly
              </Heading>
              <Paragraph fontWeight={500}>
                We have 100+ online courses, 100k online student. find your
                desired course of them
              </Paragraph>
              <Search size="large" />
            </FlexContainer>
          </FlexContainer>
        </MaxWidthContainer>
      </PaddedContainer>
    </MainContainer>
  );
};

export default LandingPage;
