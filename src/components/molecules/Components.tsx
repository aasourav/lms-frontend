import { down } from "styled-breakpoints";
import styled from "styled-components";

export const PaddedContainer = styled.div`
  width: 100%;
  padding: 0 15%;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${down("lg")} {
    padding: 0 5%;
  }
  ${down("sm")} {
    padding: 0 5%;
  }
  ${down("xs")} {
    padding: 0 1rem;
  }
`;

export const MaxWidthContainer = styled.div`
  max-width: 1360px;
  width: 100%;
`;
