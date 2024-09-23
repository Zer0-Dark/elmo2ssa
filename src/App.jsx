import Home from "./Pages/Home"
import LogIn from "./Pages/LogIn";
import Layout from "./Pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
