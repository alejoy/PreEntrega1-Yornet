import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) {
        throw new Error('Error al obtener las categorías');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar categories={categories} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
