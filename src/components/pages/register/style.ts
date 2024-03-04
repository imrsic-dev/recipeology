import styled from 'styled-components';
import Box from '@/components/UI/Box';

export const RegisterStyled = styled(Box)`
  justify-content: flex-start;
  height: 100vh;
  gap: 20px;
  padding: 76px 20px 0;
  background: linear-gradient(
    ${({ theme }) => theme.colors.gingerRoot},
    ${({ theme }) => theme.colors.gingerRoot} 230px,
    ${({ theme }) => theme.colors.foggyPith} 230px
  );
`;

export const PStyled = styled.p`
  color: ${({ theme }) => theme.colors.jediNight};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 20px 0 20px 0;
`;