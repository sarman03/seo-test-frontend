import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import FormPage from './components/FormPage';
import ListPage from './components/ListPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/form">Form</Link> | <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;