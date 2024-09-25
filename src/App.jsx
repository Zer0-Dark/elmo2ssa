import Home from "./Pages/Home"
import LogIn from "./Pages/LogIn";
import Layout from "./Pages/Layout";
import DashBoard from "./Pages/DashBoard"
import ProtectedRoute from "./Pages/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [login, setlogin] = useState(false);
  function onLogin() {
    setlogin(true)
  }
  function logout() {
    setlogin(false)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout login={login} />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn onLogin={onLogin} login={login} />}></Route>

          <Route path="/dashboard" element={

            <ProtectedRoute login={login}>
              <DashBoard logout={logout} login={login} />

            </ProtectedRoute>

          }></Route>

        </Route>

      </Routes>

    </BrowserRouter >
  )
}

export default App
