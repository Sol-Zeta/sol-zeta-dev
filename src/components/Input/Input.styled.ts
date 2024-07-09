import { getColor, getFontSize } from "@/styles/utils";
import styled from "styled-components";

export const InputWrapper = styled.div`
    min-width: 100%;
`;
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const StyledInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    background-color: transparent;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid ${getColor('line').primary};
    font-family: inherit;
    font-size: ${getFontSize()};
    color: ${getColor('secondary').white};
    caret-color: ${getColor('secondary').green};
    &:focus {
        outline: none;
        border-bottom: 1px solid ${getColor('secondary').gray};
    }
    &::placeholder{
        color: ${getColor('accent').green};
    }
`;
export const Label = styled.label``;
