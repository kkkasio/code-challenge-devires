import React, { useEffect, useState } from 'react';
import { Close } from '@styled-icons/material-outlined/Close';

import api from 'services/api';

import * as S from './styles';

export interface Todos {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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
        <S.Item
          key={todo.id.toString()}
          completed={todo.completed}
          // onClick={toggleCompleted(todo.id):void}
        >
          <div>
            <p>{todo.title}</p>
            {!todo.completed && (
              <div>
                <Close />
              </div>
            )}
          </div>
          <span>{todo.description}</span>
        </S.Item>
      ))}
    </S.Wraper>
  );
};

export default TodoList;
