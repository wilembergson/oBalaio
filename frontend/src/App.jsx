import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProdutoComponent from './components/ProdutoComponent';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProdutoComponent/>
      <Footer/>
    </div>
  );
}

export default App;
