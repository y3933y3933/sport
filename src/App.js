import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Reservation from "./pages/Reservation/Reservation";
import Instruction from "./pages/Instructions/Instructions";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="*"  element={<Navigate to="/" replace />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
