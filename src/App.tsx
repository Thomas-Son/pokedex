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
        <Route path="/gen1" element={<Generation gen={1} />} />
        <Route path="/gen2" element={<Generation gen={2} />} />
        <Route path="/gen3" element={<Generation gen={3} />} />
        <Route path="/gen4" element={<Generation gen={4} />} />
        <Route path="/gen5" element={<Generation gen={5} />} />
        <Route path="/gen6" element={<Generation gen={6} />} />
        <Route path="/gen7" element={<Generation gen={7} />} />
        <Route path="/gen8" element={<Generation gen={8} />} />
        <Route path="/gen9" element={<Generation gen={9} />} />

        <Route path="/pokemon/:id" element={<Card />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
