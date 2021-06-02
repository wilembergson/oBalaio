import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Routes from './Routes/Routes';


function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </>
  );
}

export default App;
