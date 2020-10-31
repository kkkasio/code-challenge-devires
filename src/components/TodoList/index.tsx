import React, { useCallback, useEffect, useState } from 'react';
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
  const handleDeleteTodo = useCallback(
    (id: number) => {
      setTodos([...todos].filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const toggleTodoCompleted = useCallback(
    (id: number) => {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    },
    [todos]
  );

  return (
    <S.Wraper>
      {todos.map((todo) => (
        <S.Item
          key={todo.id.toString()}
          completed={todo.completed}
          title={todo.completed ? 'cancel task' : 'confirm task'}
          // onClick={toggleCompleted(todo.id):void}
        >
          <div>
            <p onClick={() => toggleTodoCompleted(todo.id)}>{todo.title}</p>
            {!todo.completed && (
              <div>
                <Close
                  title="Remove task"
                  onClick={() => handleDeleteTodo(todo.id)}
                />
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
