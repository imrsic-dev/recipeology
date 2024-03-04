import styled, { css } from 'styled-components';

const buttonTypes = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.melancholia};
    color: ${({ theme }) => theme.colors.white};
  `,
  inverted: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.jediNight};
  `,
  social: css`
    background-color: ${({ theme }) => theme.colors.frostedToffee};
    padding: 16px;
    border-radius: 0;
    border: none;
    font-size: 0;
  `,
};

export const StyledButton = styled.button<{
  $buttonType?: string;
  $mB?: string;
}>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: ${({ $mB }) => $mB || '0'};

  ${({ $buttonType }) =>
    ($buttonType && buttonTypes[$buttonType as keyof typeof buttonTypes]) ||
    buttonTypes.primary};
`;
