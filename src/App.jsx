import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/signin/SignIn";
import { DASHBOARD, SIGN_IN, SIGN_UP, TRANSACTION } from "./routes/routesConstant";
import SignUp from "./pages/signup/SignUp";
import HomeTransaction from "./pages/transaction/HomeTransaction";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useState } from "react";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import MainLayoutAdmin from "./pages/admin/MainLayoutAdmin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      <Routes>
        <Route path={SIGN_IN} element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route
          path={TRANSACTION}
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HomeTransaction />
            </ProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD}
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayoutAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
