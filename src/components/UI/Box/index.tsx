import React from 'react';
import BoxProps from './box-types';
import { BoxStyled } from './style';

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <BoxStyled {...props}>{children}</BoxStyled>;
};

export default Box;
