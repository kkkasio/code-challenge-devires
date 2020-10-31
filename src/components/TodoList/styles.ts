import styled, { css } from 'styled-components';

export const Wraper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin-top: ${theme.spacings.medium};
    li {
      color: ${theme.colors.primary};
      font-size:${theme.font.sizes.xlarge};
      font-weight:300;
      display:flex;
      flex-direction:column;
      span{
        font-size:${theme.font.sizes.xsmall};
        color:${theme.colors.gray};
        letter-spacing: 0.1rem;
      }
    & + li {
      margin-top: ${theme.spacings.small};
    }
  `}
`;
