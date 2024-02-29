import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const List = ({ todos, toggleTodo }: any) => (
  <ul
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      border: "1px solid #ddd",
      width: "30vw",
      borderRadius: "10px",
      padding: "20px",
    }}
  >
    {todos.map((todo: any) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default List;
