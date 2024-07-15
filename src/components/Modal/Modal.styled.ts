import { borderTheme, getBorderRadius, getColor, getFontSize } from "@/styles/utils";
import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); // Gray transparent background
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  ${borderTheme};
  background: ${getColor("background").light};
  border-radius: ${getBorderRadius()};
  box-shadow: 0px 2px 15px rgba(50, 50, 50, 0.9);
  padding: 16px 24px 32px 24px;
  width: 90%;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 500px;
    max-height: 90vh;
  }
  overflow: hidden;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 32px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 0 32px 0;
  & > .modalIcon svg {
    fill: ${getColor("secondary").green};
  }
  & > .modalIcon.isError svg {
    fill: ${getColor("accent").salmon};
  }
`;

export const Title = styled.h3`
  font-size: ${getFontSize('xl')};
  font-weight: normal;
`;

export const Message = styled.p`
    padding: 16px;
`;
