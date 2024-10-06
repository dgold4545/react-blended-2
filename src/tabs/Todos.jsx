import { EditForm, Form, Text, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const LS_TODOS_KEY = 'TODOS_KEY';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_TODOS_KEY)) ?? [],
  );

  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    window.localStorage.setItem(LS_TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = text => {
    setTodos(prevValues => [...prevValues, { id: nanoid(), text }]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleChangeEditing = todoItem => {
    setCurrentTodo(todoItem);
  };

  const updateTodo = text => {
    if (text === currentTodo.text) return;
    setTodos(
      todos.map(item =>
        item.id === currentTodo.id ? { ...currentTodo, text } : item,
      ),
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setCurrentTodo(null);
  };

  return (
    <>
      {currentTodo ? (
        <EditForm
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
        />
      ) : (
        <Form onHandleSubmit={handleSubmit} />
      )}

      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleChangeEditing={handleChangeEditing}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
