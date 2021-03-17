import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Produtos/Produtos/Cadastro/Home';
import ListaProduto from './Produtos/Produtos/Listagem/ListaProduto';
import { ProdutoUsado } from './ProdutoUsado';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<ProdutoUsado />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              name="Produtos"
              path="/listaProduto"
              element={<ListaProduto />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
