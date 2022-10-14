import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import TodoDetail from "./pages/TodoDetail";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="todo-detail" element={<TodoDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
