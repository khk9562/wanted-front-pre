import "./App.css";
import List from "./components/List";
import { Provider as MyProvider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

function App() {
  // const store = configureStore({ reducer: r });

  return (
    // <MyProvider store={store}>
    <main>
      <List />
    </main>
    // </MyProvider>
  );
}

export default App;
