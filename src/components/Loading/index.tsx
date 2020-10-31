import React from 'react';

import * as S from './styles';

export type LoadingProps = {
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
};

const Loading = ({ size = 'small', color = 'primary' }: LoadingProps) => {
  return <S.Wraper size={size} color={color} />;
};

export default Loading;
