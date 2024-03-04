import { styled } from 'styled-components';
import BoxProps from './box-types';

export const BoxStyled = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'column'};
  justify-content: ${({ $content }) => $content || 'flex-start'};
  align-items: ${({ $items }) => $items || 'flex-start'};
  gap: ${({ $gap }) => $gap || '0'};
  width: 100%;
`;
