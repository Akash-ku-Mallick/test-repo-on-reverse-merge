import './App.css';

import Header from './Section/Header';
import Navbar from './Section/NavBar';
import Hero from './Section/Hero';
import Context from './Section/Context';
import Contact from './Section/Contact';
import Footer from './Section/Footer';



function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Hero />
        <Context />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

