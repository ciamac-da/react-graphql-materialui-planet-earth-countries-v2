import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from '../components/common/Footer/Footer';
import Translate from "../components/Translate/Translate";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Translate />
    <Footer />
    </div>
  );
}

export default App;
