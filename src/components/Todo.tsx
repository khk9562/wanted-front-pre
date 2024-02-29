import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }: any) => {
  return (
    <li
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <button
        type="button"
        style={{
          border: "0 none",
          backgroundColor: "#ddd",
          color: "#333",
          borderRadius: "8px",
          fontSize: "13px",
          width: "40px",
          height: "25px",
          fontWeight: "600",
        }}
        onClick={onClick}
      >
        {completed ? "취소" : "✔️"}
      </button>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
