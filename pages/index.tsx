import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../src/components/templates/landing/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pathshala</title>
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
