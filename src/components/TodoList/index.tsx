import React, { useEffect, useState } from 'react';
import api from 'services/api';

import * as S from './styles';

interface Todos {
  id: number;
  title: string;
  description: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  useEffect(() => {
    api
      .get<Todos[]>('/todos')
      .then((response) => setTodos(response.data))
      .catch((response) => console.log(response.error));
  }, []);
  return (
    <S.Wraper>
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          {todo.title} <span>{todo.description}</span>
        </li>
      ))}
    </S.Wraper>
  );
};

export default TodoList;
