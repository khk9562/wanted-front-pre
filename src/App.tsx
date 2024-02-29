import React from "react";
import "./App.css";
import List from "./components/List";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as MyProvider } from "react-redux";
import rootReducer from "./store";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Filter";

const App = () => {
  const store = createStore(rootReducer);

  return (
    <MyProvider store={store}>
      <main className="container">
        <header>
          <h1>TO DO LIST</h1>
        </header>
        <AddTodo />
        <Footer />
        <VisibleTodoList />
      </main>
    </MyProvider>
  );
};

export default App;
