import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { SearchBar } from './Components/SearchBar';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom"
import { MovieList } from './Components/MovieList';
import { Favorites } from './Components/Favorites';
import { MovieDetails } from './Components/MovieDetails';

function App() {
  return (
    <div className = "App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details:id" element={<MovieDetails />} />
      </Routes>
      </div>
  );
}

export default App;
