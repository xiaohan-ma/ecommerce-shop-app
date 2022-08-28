import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import ShoppingCart from "./pages/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import Accountpage from "./pages/Accountpage";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products/:filter" exact element={<Productpage />} />
        <Route path="/login" exact element={<Loginpage />} />
        <Route path="/account" exact element={<Accountpage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
