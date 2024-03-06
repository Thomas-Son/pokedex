import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/containers/header/index"
import Footer from "./components/containers/footer/index"

import Home from "./components/pages/home/index"
import Generation from "./components/pages/generation/index"
import Card from "./components/pages/card/index"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen/:gen" element={<Generation />} />
        <Route path="/pokemon/:id" element={<Card />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
