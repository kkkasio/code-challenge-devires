import React, { useCallback, useEffect } from 'react';
import { Close } from '@styled-icons/material-outlined/Close';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getAllTodos, removeTodo } from 'store/ducks/todos.duck';

import * as S from './styles';
import Loading from 'components/Loading';

export interface Todos {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: RootState) => state.todoReducer);

  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return (
    <>
      {loading && <Loading size="small" color="primary" />}
      <S.Wraper>
        {todos.map((todo) => (
          <S.Item
            key={todo.id.toString()}
            completed={todo.completed}
            title={todo.completed ? 'cancel task' : 'confirm task'}
            // onClick={toggleCompleted(todo.id):void}
          >
            <div>
              <p>{todo.title}</p>
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
    </>
  );
};

export default TodoList;
