import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Container from 'components/Container/';
import * as S from './styles';

import TodoList from 'components/TodoList';
const Todo: React.FC = () => {
  return (
    <div>
      <S.Wraper>
        <Container>
          <h2>What&apos;s your plan for today?</h2>
          <div>
            <Input type="text" name="todo" placeholder="Todo title" />
            <Input
              type="text"
              name="description"
              placeholder="Describe your todo action"
            />
          </div>
          <Button size="medium">Add Todo</Button>

          <TodoList />
        </Container>
      </S.Wraper>
    </div>
  );
};

export default Todo;
