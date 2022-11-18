import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entrada from "./components/EntradaPage";
import Saida from "./components/SaidaPage";
import GlobalStyle from "./components/GlobalStyle"
import HomePage from "./components/Home";
import SignIn from "./components/SignInPage.js";
import SignUp from "./components/SignUpPage";
import { CustomerProvider } from "./contexts/customer";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CustomerProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/entrada" element={<Entrada />} />
          <Route path="/saida" element={<Saida />} />
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}


