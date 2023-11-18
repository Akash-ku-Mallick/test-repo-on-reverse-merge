import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";


// import Scene from '../Section/Scene';

import Blogs from '../Section/Blogs';
import {Context1} from '../Section/Context1';
import  Footer  from '../Section/Footer';
import { TechStackWithName } from '../Section/TechStack';

import { motion, useInView, Variants } from 'framer-motion'


import {gsap} from 'gsap';
import ScrollTrigger from 'gsap'
import ScrollSmoother from 'gsap'

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArticleIcon from '@mui/icons-material/Article';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface heroProps {
  HeroRef: any;
}

interface navbarProps {
  ifInView: boolean;
}

export default function Home() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  const IfHeroInView: boolean = useInView(heroRef, {margin: '50% 50% 50% 50%', amount: 0.5});


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  

  

  return (
    <div className="App">
      {/* {windowSize[0] > windowSize[1] && <Scene props={windowSize} />} */}
      {windowSize[0] < windowSize[1] && <Drawer />}
      <div className="container" ref={containerRef}>
        {windowSize[0] > windowSize[1] && <Navbar ifInView={IfHeroInView} />}
        <Hero HeroRef={heroRef} />
        <Context1 />
        <TechStackWithName />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}


// _______________ Hero _________________   ------Start


export function Hero(props: heroProps) {
  const navigate = useNavigate();
  
  const ResumeBtnClick = () => {
    console.log('ResumeBtnClick');
    navigate("/Akash-Kumar/my-resume");
  }

  const contextOfHero = "I am an immediate joiner, looking for better opportunity as a front-end developer"
  return(
    <motion.section id="Hero" className='Hero panel' ref={props.HeroRef}>
      <div className='headText'>Akash 
      <span>Kumar</span>
      </div>
      <div className='dwBtn glass' onClick={ResumeBtnClick}>
        <ArticleIcon htmlColor='white' fontSize='small' />
        <p>My Resume</p>
      </div>
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
      top: "auto",
      opacity: [0.3, 0.5, 1],
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      top: 0,
      bottom: "auto",
      opacity: [0.3, 1, 0.5],
      transition: {
        duration: 0.34,
        easings: "easeOut",
      },
    },
  }


  return(
    <motion.div className="Navbar glass"
      variants={motionVariants}
      animate={props.ifInView ? "enter" : "exit"}
      ref={navbarRef}
      whileHover={{opacity: 1}}
      >
      <a href="https://akash-ku-mallick.github.io/Akash-Kumar-Website/">
        About Me</a>
      <a href="#Context">Projects</a>
      <a href="#Context2">Skills</a>
      <a href="#Blogs">Blogs</a>
      <a href="#Contact">Hire Me</a>
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