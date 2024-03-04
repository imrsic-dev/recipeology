import styled from 'styled-components';

const LineStyled = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.jediNight};
`;

export default LineStyled;