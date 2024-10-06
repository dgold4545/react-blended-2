import { Form, Text, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const LS_TODOS_KEY = 'TODOS_KEY';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_TODOS_KEY)) ?? [],
  );

  useEffect(() => {
    window.localStorage.setItem(LS_TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = text => {
    setTodos(prevValues => [...prevValues, { id: nanoid(), text }]);
  };

  console.log(todos);

  return (
    <>
      <Form onHandleSubmit={handleSubmit} />
      <TodoList todos={todos} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
