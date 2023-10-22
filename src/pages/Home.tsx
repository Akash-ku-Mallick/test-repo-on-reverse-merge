import './App.css';
import { useEffect, useRef, useState } from 'react';
import Scene from '../Section/Scene';

import Blogs from '../Section/Blogs';
import {Context1} from '../Section/Context1';
import Context2 from '../Section/Context2';
import  Footer  from '../Section/Footer';

import { motion, useInView, Variants } from 'framer-motion'


import {gsap} from 'gsap';
import ScrollTrigger from 'gsap'
import ScrollSmoother from 'gsap'

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface heroProps {
  ifInView: boolean;
  setIfInView: (ifInView: boolean) => void;
}

interface navbarProps {
  ifInView: boolean;
}

export default function Home() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [heroInView, CheckHeroInView] = useState(false);

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
      {windowSize[0] < windowSize[1] && <Drawer />}
      <div className="container">
        {windowSize[0] > windowSize[1] && <Navbar ifInView={heroInView} />}
        <Hero ifInView={heroInView} setIfInView={CheckHeroInView} />
        <Context1 />
        <Context2 props={windowSize} />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}


// _______________ Hero _________________   ------Start


export function Hero(props: heroProps) {
  const heroRef = useRef(null);
  const IfHeroInView: boolean = useInView(heroRef, {margin: '30% 0% 50% 0%'})

  useEffect(() => {
    props.setIfInView(IfHeroInView);
  }, [IfHeroInView, props.ifInView]);

  const contextOfHero = "I am an immediate joiner, looking for better opportunity as a front-end developer"
  return(
    <motion.section id="Hero" className='Hero panel' ref={heroRef}>
      <div className='cirlcle hrimg' />
      <p>{contextOfHero}</p>
    </motion.section>
  )
}


function Navbar(props: navbarProps) {
  const navbarRef = useRef(null);
  const motionVariants: Variants = {
    enter: {
      bottom: 0,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      top: 0,
      transition: {
        duration: 0.1,
        easings: "easeOut",
      },
    },
  }


  return(
    <motion.div className="Navbar glass"
      variants={motionVariants}
      animate={props.ifInView ? "enter" : "exit"}
      ref={navbarRef}>
      <a href="https://akash-ku-mallick.github.io/Akash-Kumar-Website/">
        About Me</a>
      <a href="#Context">Projects</a>
      <a href="#Context2">Tech Stacks</a>
      <a href="#Blogs">Blogs</a>
      <a href="#Contact">Community</a>
      </motion.div>
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
          backgroundColor: "rgb(255, 255, 255, 1)",
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
        <div style={{width: '100%', background: '#5C8374', backgroundColor: 'rgb(255, 255, 255, 1)'}}>
        <button
          onClick={() => {
            setDrawerStatus(!drawerStatus);
          }}
          style={{position: "absolute", top: "0", right: "0"}}
        >
          <CloseRoundedIcon fontSize="large" />
        </button>
        </div>
        <ul>
          <li>
            <a className="Header" href="https://akash-ku-mallick.github.io/Akash-Kumar-Website/">Akash Kumar</a>
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