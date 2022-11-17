import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle"
import HomePage from "./components/Home";
import SignIn from "./components/SignInPage.js";
import SignUp from "./components/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}


