import React from 'react';
import './App.css';
import { Todoform } from './components/Todoform';
import { TodoList } from './components/TodoList';
import { TodosContextProvider } from './contexts/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <div className="flex flex-col h-screen w-full pt-40 items-center p-0 m-0 text-4xl">
        <Todoform />
        <TodoList />
      </div>
    </TodosContextProvider>
  );
}

export default App;
