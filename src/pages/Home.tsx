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

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
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


  const [ifPhone, setIfPhone] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < window.innerHeight) {
        setIfPhone(true);
      } else {
        setIfPhone(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  

  const navigate = useNavigate();
  
  const ResumeBtnClick = () => {
    navigate("/Akash-Kumar/my-resume");
  }

  const title = "I am Akash Kumar Mallick";
  const Desccrption = "I am an immediate joiner, looking for better opportunity as a front-end developer";

  


  return(
    <motion.section id="Hero" className='Hero panel' ref={props.HeroRef}>
      <div 
      className={ifPhone?'heroHeader heroHeader_mobile':'heroHeader'}
      onClick={()=>{alert("will redirect to Github page")}}>
        <div className='headText'>
          <span className='span_1'>Akash</span>
          <span className='span_2'>Kumar</span>
        </div>
        <div className='dwBtn glass' onClick={ResumeBtnClick}>
          <ArticleIcon htmlColor='white' />
          <p>My Resume</p>
        </div>
      </div>
      
      <div className={ifPhone?'HeroBody HeroBody_mobile':'HeroBody HeroBody_desktop'}>
        <div className='img_container'>
            <div id='image' />
        </div>
        <div className='text'>
          <div className='title'>
            {title}
          </div>
          <div className='description glass'>
            {Desccrption}
          </div>
        </div>
      </div>  
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

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <motion.div
        id="Intro"
        initial={{
          width: "70vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          right: "-71vw",
          zIndex: 123,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        animate={{
          animation: "ease-in-out",
          right: drawerStatus ? 0 : "-71vw" ,
        }}
        transition={{
          duration: 0.65,
        }}
      >
        <div className='drawer_container'>
        <div
        className="drawer_btn"
        onClick={() => {
          setDrawerStatus(!drawerStatus);
        }}
        style={{position: drawerStatus ? "relative":"absolute", top: 0,left: drawerStatus?'2%': -75, zIndex: "12"}}
      >
        {!drawerStatus?
        <MenuRoundedIcon />
        :<ArrowBackIosNewRoundedIcon />}
      </div>
        
        <div className='drawer_body'>
        <div className='headText' onClick={ScrollToTop}>
          <span className='span_1'>Akash</span>
          <span className='span_2'>Kumar</span>
        </div>
        <a className="drawer_link" onClick={()=>{setDrawerStatus(!drawerStatus)}} href="#Context">Projects</a>
          <a className="drawer_link" onClick={()=>{setDrawerStatus(!drawerStatus)}} href="#Blogs">Blogs</a>
          <a className="drawer_link" onClick={()=>{setDrawerStatus(!drawerStatus)}} href="#Contact">Join Me</a>
        </div>
        </div>
      </motion.div>
    </>
  );
}