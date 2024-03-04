import styled from 'styled-components';
import Icon from '../Icon';

export const InputContainer = styled.div`
  position: relative;
  background-color: inherit;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 32px 16px 16px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.jediNight};
  background: rgba(223, 223, 223, 0.5);
  outline: none;

  &:focus,
  &:valid,
  &:not(:placeholder-shown) {
    background: rgba(0, 0, 0, 0);
    border-color: ${({ theme }) => theme.colors.pureRed};
  }

  &:focus + label,
  &:valid + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    padding: 0 3px;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.pureRed};
    opacity: 1;
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.jediNight};
  pointer-events: none;
  transition: 0.2s ease-out;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
`;

export const IconStyled = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
