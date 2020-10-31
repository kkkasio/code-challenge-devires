import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/ducks/todos.duck';

import Button from 'components/Button';
import Input from 'components/Input';
import Container from 'components/Container/';
import * as S from './styles';

import TodoList from 'components/TodoList';

const Todo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addTodo(title, description));
    setTitle('');
    setDescription('');
  };
  return (
    <div>
      <S.Wraper>
        <Container>
          <h2>What&apos;s your plan for today?</h2>
          <div>
            <form onSubmit={handleSubmitForm}>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Todo title"
              />
              <Input
                type="text"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Describe your todo action"
              />
              <Button size="medium">Add Todo</Button>
            </form>
          </div>

          <TodoList />
        </Container>
      </S.Wraper>
    </div>
  );
};

export default Todo;
