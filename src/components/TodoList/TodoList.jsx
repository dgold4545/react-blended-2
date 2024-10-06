import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, handleDelete, handleChangeEditing }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem
            onhandleDelete={handleDelete}
            text={todo.text}
            id={todo.id}
            count={i + 1}
            handleChangeEditing={handleChangeEditing}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
