import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';

export function Todoform() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };
  return (
    <form onSubmit={onSubmit} className="todoForm">
      <input
        className="outline-none"
        value={value}
        placeholder="무엇을 하실 건가요??"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button">등록</button>
    </form>
  );
}
