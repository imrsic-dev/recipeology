import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 28px 26px 0;
  background: ${({ theme }) => theme.colors.foggyPith};
  border-radius: 3px;
`;