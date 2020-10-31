import styled, { css, keyframes } from 'styled-components';
import { LoadingProps } from '.';

const spin = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

const wrapperModifiers = {
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  medium: () => css`
    width: 6rem;
    height: 6rem;
  `,
  large: () => css`
    width: 8rem;
    height: 8rem;
  `,
};

export const Wraper = styled.div<LoadingProps>`
  ${({ theme, size, color }) => css`
    border: 8px solid ${theme.colors[color]};
    border-left-color: #8f8f8f;
    border-radius: 50%;
    margin: 2rem auto;

    ${size && wrapperModifiers[size]}
    animation: ${spin} 1s linear infinite;
  `};
`;
