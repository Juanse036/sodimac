import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../types/product';
import { SuccessPopup } from '../components/SuccessPopup';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  cartCount: number;
}
interface CartContextProps {
  children: React.ReactNode
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartContextProps) => {

  const [showPopup, setShowPopup] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState("");

  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('sodimac_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('sodimac_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === product.productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });

    setLastAddedProduct(product.displayName);
    setShowPopup(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Evitamos cantidades menores a 1

    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, updateQuantity }}>
      {children}
      {showPopup && (
      <SuccessPopup 
        productName={lastAddedProduct} 
        onClose={() => setShowPopup(false)} 
      />
    )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de un CartProvider');
  return context;
};