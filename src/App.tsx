import React from "react";
import "./App.css";
import List from "./components/List";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as MyProvider } from "react-redux";
import rootReducer from "./store";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const App = () => {
  const store = createStore(rootReducer);

  return (
    <MyProvider store={store}>
      <main className="container">
        <header>
          <h1>TO DO LIST</h1>
        </header>
        {/* <section className="box">
          <input type="text" placeholder="할 일을 입력해주세요" />
          <button type="button">추가</button>
        </section> */}
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </main>
    </MyProvider>
  );
};

export default App;
