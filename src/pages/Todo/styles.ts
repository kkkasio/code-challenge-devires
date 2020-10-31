import styled, { css } from 'styled-components';

export const Wraper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 520px;
    min-height: 600px;
    background: ${theme.colors.darkGray};
    text-align: center;
    margin: ${theme.spacings.small} auto;
    border-radius: 10px;
    padding-bottom: 32px;
    h2 {
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.lightGray};
      font-weight: 300;
    }
  `}
`;
