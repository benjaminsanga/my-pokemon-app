import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
