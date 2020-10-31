import styled, { css, DefaultTheme } from 'styled-components';

import { Todos } from './index';

type TodosModifiers = Pick<Todos, 'completed'>;

const wrapperModifiers = {
  completed: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
  `,
};

export const Wraper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Item = styled.li<TodosModifiers>`
  ${({ theme, completed }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 300;
    display: flex;
    flex-direction: column;

    ${!!completed && wrapperModifiers.completed(theme)}

    &:hover {
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
    }

    p {
      flex: 1;
    }

    span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      letter-spacing: 0.1rem;
    }

    & + li {
      margin-top: ${theme.spacings.small};
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${theme.colors.white};
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: ${theme.colors.secondary};
        transform: rotateY(180deg);
      }
    }
  `}
`;
