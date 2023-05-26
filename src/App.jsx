import './App.scss';
import { HomePage, TodoPage, LoginPage, SignUpPage } from './pages';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="todo" element={<TodoPage />} />
          {/* *代表其餘的router導引到這裡 */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <TodoPage /> */}
    </div>
  );
}

export default App;
