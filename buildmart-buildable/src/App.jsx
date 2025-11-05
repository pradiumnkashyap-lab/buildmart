import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-yellow-600">BuildMart</Link>
          <nav className="space-x-4">
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/cart" className="ml-2">Cart</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </main>

      <footer className="mt-12 bg-white border-t">
        <div className="max-w-6xl mx-auto p-4 text-sm text-gray-600">© BuildMart — MVP</div>
      </footer>
    </div>
  )
}
