import React from "react";
import { FlexContainer } from "../atoms";
import Image from "next/image";
import { MaxWidthContainer, PaddedContainer } from "./Components";
import styled from "styled-components";
import { Paragraph } from "../atoms/typography/Paragraph";
import { useRouter } from "next/router";

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
`;

const navItems = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

const LinkWrapper = styled.div`
  cursor: pointer;
`;

const MainContainer = styled(FlexContainer)`
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.secondary?.light4};
  box-shadow: 0 0.25rem 1.25rem 0 rgba(167, 172, 183, 0.3);
`;

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <MainContainer width="100%" alignItems="center">
      <PaddedContainer>
        <MaxWidthContainer>
          <FlexContainer alignItems="center" justifyContent="space-between">
            <Image
              src="/pathshala.png"
              height={70}
              width={100}
              alt="web image"
            />
            <Nav>
              {navItems.map((data) => (
                <LinkWrapper
                  key={data.name}
                  onClick={() => router.push(data.url)}
                >
                  <Paragraph fontWeight={600}>{data.name}</Paragraph>
                </LinkWrapper>
              ))}
            </Nav>
          </FlexContainer>
        </MaxWidthContainer>
      </PaddedContainer>
    </MainContainer>
  );
};

export default Header;
