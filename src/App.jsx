import React from 'react';
import Header from './Components/Header';
import HomePage from './Components/Home.page/Home.page';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;