
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import SignUp from "./Screens/SignUp"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}
