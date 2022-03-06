import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Login /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
