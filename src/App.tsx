import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <Router>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
    </Router>
  );
}

export default App
