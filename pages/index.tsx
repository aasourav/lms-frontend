import type { NextPage } from "next";
import Head from "next/head";
import { FlexContainer } from "../src/components/atoms";
import { Paragraph } from "../src/components/atoms/typography/Paragraph";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pathshala</title>
      </Head>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <FlexContainer>
        <Paragraph>hi</Paragraph>
      </FlexContainer>
    </>
  );
};

export default Home;
