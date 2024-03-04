import React, { useState } from 'react';
import Icon from '../Icon';
import { InputContainer, InputStyled, LabelStyled, IconStyled } from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const iconName = showPassword ? 'eye' : 'eye-slash';
  return (
    <InputContainer>
      {props.type === 'password' ? (
        <InputStyled
          {...props}
          placeholder=""
          type={showPassword ? 'text' : 'password'}
        />
      ) : (
        <InputStyled {...props} placeholder="" />
      )}

      <LabelStyled>{label}</LabelStyled>
      {props.type === 'password' && (
        <IconStyled onClick={toggleShowPassword}>
          <Icon name={iconName} alt="eye icon" height={18} width={18} />
        </IconStyled>
      )}
    </InputContainer>
  );
};

export default Input;
