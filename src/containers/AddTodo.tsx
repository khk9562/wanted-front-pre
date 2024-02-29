import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <input
          value={inputValue}
          onChange={handleInputChange}
          style={{
            border: "0 none",
            backgroundColor: "#eee",
            height: "35px",
            width: "20vw",
            borderRadius: "5px",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            border: "0 none",
            padding: "5px 8px",
            backgroundColor: "#333",
            color: "#eee",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          할일추가
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
