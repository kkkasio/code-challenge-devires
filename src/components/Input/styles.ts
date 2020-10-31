import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  isFocused: boolean;
  isFilled: boolean;
};

const wrapperModifiers = {
  focus: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    border: 0.2rem solid ${theme.colors.primary};
  `,

  filled: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
};

export const Wraper = styled.div<WrapperProps>`
  ${({ theme, isFocused, isFilled }) => css`
  input {
      padding: ${theme.spacings.xxsmall};
      width: 36rem;
      height: 4rem;
      border-radius: ${theme.border.radius};
      outline:none;
      ${!!isFocused && wrapperModifiers.focus(theme)}
      ${!!isFilled && wrapperModifiers.focus(theme)}
    }
    & + div {
      margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.medium};
    }
    }
  `}
`;
