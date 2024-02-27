import "./App.css";
import List from "./components/List";
import { Provider as MyProvider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

function App() {
  // const store = configureStore({ reducer: r });

  return (
    // <MyProvider store={store}>
    <main className="container">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <section className="box">
        <input type="text" placeholder="할 일을 입력해주세요" />
        <button type="button">추가</button>
      </section>
      <List />
    </main>
    // </MyProvider>
  );
}

export default App;
