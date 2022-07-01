import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
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
        </Routes>
      </Main>
      <Footer />
    </>

  );
}

export default App;
