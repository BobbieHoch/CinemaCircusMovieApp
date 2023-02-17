import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Componets/Header';
import { SearchBar } from './Componets/SearchBar';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom"
import { MovieList } from './Componets/MovieList';
import { Favorites } from './Componets/Favorites';

function App() {
  return (
    <div className = "App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
  );
}

export default App;
