import './App.css';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Scene from '../Section/Scene';

import Blogs from '../Section/Blogs';
import {Context1} from '../Section/Context1';
import Context2 from '../Section/Context2';
import  Footer  from '../Section/Footer';

import { motion } from 'framer-motion'


import {gsap} from 'gsap';
import ScrollTrigger from 'gsap'
import ScrollSmoother from 'gsap'

import MenuIcon from '@mui/icons-material/Menu';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const appRef = useRef(null)
  const x = useInView(appRef, {margin: '90% 0% 0% 0%'})
  useEffect(()=>{console.log(x)},[x])

  

  return (
    <div className="App">
      {windowSize[0] > windowSize[1] && <Scene props={windowSize} />}
      {windowSize[0] > windowSize[1] ? <Navbar /> : <Drawer />}
      <div className="container">
        <Hero />
        <Context1 />
        <Context2 props={windowSize} />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}


// _______________ Hero _________________   ------Start


export function Hero() {
  const contextOfHero = "I am an immediate joiner, looking for better opportunity as a front-end developer"
  return(
    <section id="Hero" className='Hero panel' >
      <div className='cirlcle hrimg' />
      <p>{contextOfHero}</p>
    </section>
  )
}

// _______________ Hero _________________   ------End



function Header() {
  return (
    <section className="Header">
      <a href="https://akash-ku-mallick.github.io/Akash-Kumar-Website/">
        <h3>Akash Kumar</h3> </a>
    </section>
  );
}

function Navbar() {
  return(
    <section className="Navbar">
      <Header />
      <a href="#Context">Projects</a>
      <a href="#Context2">Tech Stacks</a>
      <a href="#Blogs">Blogs</a>
      <a href="#Contact">Join Me</a>
      </section>
    )
}


function Drawer () {
  const [drawerStatus, setDrawerStatus] = useState(false);




  return (
    <>
      <button
        onClick={() => {
          setDrawerStatus(!drawerStatus);
        }}
        style={{position: "absolute", top: "0", right: "0", zIndex: "12"}}
      >
        <MenuIcon fontSize="large"  style={{color: 'white'}} />
      </button>
      <motion.div
        id="Intro"
        initial={{
          width: "70vw",
          height: "100vh",
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          right: "-100%",
          zIndex: 123,
        }}
        animate={{
          animation: "ease-in-out",
          right: drawerStatus ? 0 : "-110vw" ,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div style={{width: '100%', background: '#5C8374'}}>
        <button
          onClick={() => {
            setDrawerStatus(!drawerStatus);
          }}
          style={{position: "absolute", top: "0", right: "0"}}
        >
          <MenuIcon fontSize="large" />
        </button>
        </div>
        <ul>
          <li>
            <Header />
          </li>
          <li>
            <a href="#Context">Projects</a>
          </li>

          <li>
            <a href="#Blogs">Blogs</a>
          </li>

          <li>
            <a href="#Contact">Join Me</a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}