import React from 'react';
import { useTodosDispatch, Todo } from '../contexts/TodosContext';

export type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
    });
  };
  return (
    <div className="flex w-full p-2 justify-between">
      <div className="">
        <button
          className="mr-2"
          type="button"
          onClick={onToggle}
          style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        >
          {todo.text}
        </button>
      </div>
      <div className="ItemBtn">
        <button type="button" onClick={onRemove}>
          삭제
        </button>
      </div>
    </div>
  );
}
