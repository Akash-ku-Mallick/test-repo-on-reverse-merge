import './App.css';

import Navbar from '../Section/NavBar';
import Hero from '../Section/Hero';
import Context from '../Section/Context';
import Contact from '../Section/Contact';
import Footer from '../Section/Footer';



function Home() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Context /> 
        <Contact />
        <Footer />
      </div>
  );
}

export default Home;

/* 


<Context />  is Project and members 

*/