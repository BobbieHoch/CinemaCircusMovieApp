import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Componets/Header';
import { SearchBar } from './Componets/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
