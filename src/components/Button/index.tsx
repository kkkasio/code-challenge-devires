import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;

  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, icon, size = 'medium', ...rest }: ButtonProps) => (
  <S.Wraper type="submit" size={size} icon={!!icon} {...rest}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wraper>
);

export default Button;
