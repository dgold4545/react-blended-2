import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem text={todo.text} count={i + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
