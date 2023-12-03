import { Button } from "antd";
import styled from "styled-components";
import { Paragraph } from "../typography/Paragraph";

export const RoundedButton = styled(Button)`
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const RoundedPrimaryButton = styled(Button)<{ icon?: any }>`
  width: 100%;
  max-width: 100%;
  /* height: auto; */
  border-radius: 2px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Paragraph} {
    margin-left: ${({ icon }) => (icon ? "0.53rem" : "")};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors?.secondary?.light1};
    &:hover {
      background-color: ${({ theme }) => theme.colors?.secondary?.light1};
    }
  }
`;

export const RoundedOutlineButton = styled(Button)<{
  height?: string;
  icon?: any;
}>`
  width: 100%;
  max-width: 100%;
  height: ${({ height }) => height || "2.5rem"};
  border-radius: 2px;
  margin: 0;
  ${Paragraph} {
    transition: 0.3s ease-out;
  }
`;

export const ConfirmButton = styled(RoundedOutlineButton)`
  border-color: ${({ theme }) => theme.colors?.borders?.main};
  border-radius: 2px;
  &:hover {
    ${Paragraph} {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.grays.gray3} !important;
  color: ${({ theme }) => theme.colors.primary.main} !important;
`;
