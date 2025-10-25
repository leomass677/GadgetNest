// src/Route.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../PublicPages/Home";
import ProductDetails from "../PublicPages/ProductDetails";
import Contact from "../PublicPages/Contact";
import LoginRegister from "../PublicPages/LoginRegister";
import ShopProducts from "../PublicPages/ShopProducts";
import AboutUs from "../PublicPages/AboutUs";
import NotFound from "../utils/NotFound"; // Make sure this exists
import Cart from "../ShoppingFlow/Cart"; // Add this if you have a Cart page

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ShopProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
