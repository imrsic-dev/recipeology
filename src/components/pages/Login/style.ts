import styled from 'styled-components';
import Box from '@/components/UI/Box';

export const LoginStyled = styled(Box)`
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

export const TitleStyled = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.angelicWhite};
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const LinkTextStyled = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.jediNight};
`;

export const PStyled = styled.p`
  color: ${({ theme }) => theme.colors.jediNight};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 20px 0 20px 0;
`;
