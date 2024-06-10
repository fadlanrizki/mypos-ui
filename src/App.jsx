import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import { LOGIN, SIGN_UP } from "./routes/routesConstant";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGN_UP} element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
