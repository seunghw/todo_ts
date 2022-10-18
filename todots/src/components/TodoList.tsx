import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodosState } from '../contexts/TodosContext';

export function TodoList() {
  const todos = useTodosState();
  return (
    <div className="w-[27rem] flex justify-center items-center flex-col pt-10 ">
      {todos.length === 0 ? (
        <span>오늘의 일정 등록하기</span>
      ) : (
        todos.map((item) => <TodoItem todo={item} key={item.id} />)
      )}
    </div>
  );
}
