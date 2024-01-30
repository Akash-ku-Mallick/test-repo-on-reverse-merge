import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

// import Scene from '../Section/Scene';

import Blogs from '../Section/Blogs';
import { Context1 } from '../Section/Context1';
import Footer from '../Section/Footer';
import { TechStackWithName } from '../Section/TechStack';

import { SVGMotionProps, motion, useCycle, useInView, Variants } from 'framer-motion'


import { gsap } from 'gsap';
import ScrollTrigger from 'gsap'
import ScrollSmoother from 'gsap'

import ArticleIcon from '@mui/icons-material/Article';
import { Icon } from '@iconify/react';

import '../styles/DrawerStyles.css';
import { JSX } from "react/jsx-runtime";

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

  const IfHeroInView: boolean = useInView(heroRef, { margin: '50% 50% 50% 50%', amount: 0.5 });

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
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

  const [ifPhone, setIfPhone] = useState<boolean>(window.innerWidth < window.innerHeight);

  const handleWindowResize: () => void = () => {
    if (window.innerWidth < window.innerHeight) {
      setIfPhone(true);
    } else {
      setIfPhone(false);
    }
  };

  useEffect(() => {
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
  const Desccrption = "I am a front-end developer and a UI/UX designer. I love to design and develop websites and web apps.";




  return (
    <motion.section id="Hero" className='Hero panel' ref={props.HeroRef}>
      <div
        className={ifPhone ? 'heroHeader heroHeader_mobile' : 'heroHeader'}>
        <div className='headText'>
          <span className='span_1'>Akash</span>
          <span className='span_2'>Kumar</span>
        </div>
        <div className='dwBtn glass' onClick={ResumeBtnClick}>
          <ArticleIcon htmlColor='white' />
          <p>My Resume</p>
        </div>
      </div>

      <div className={ifPhone ? 'HeroBody HeroBody_mobile' : 'HeroBody HeroBody_desktop'}>
        <div className='img_container'>
          <motion.div
            id='image'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.5, when: "beforeChildren", delay: 0.1 }}
          viewport={{ once: false }}
          className='text'>
          <motion.div className='title'>
            {title}
          </motion.div>
          <motion.div className='description glass'>
            {Desccrption}
          </motion.div>
        </motion.div>
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


  return (
    <motion.div className="Navbar glass"
      variants={motionVariants}
      animate={props.ifInView ? "enter" : "exit"}
      ref={navbarRef}
      whileHover={{ opacity: 1 }}
    >
      <a href="#Hero">
        About Me</a>
      <a href="#Context">Projects</a>
      <a href="#tech">Skills</a>
      <a href="#Blogs">Blogs</a>
      <a href="#Contact">Hire Me</a>
    </motion.div>
  )
}


const drawerVariants = {
  open: {
    width: '70vw',
    height: '100vh',
    transition: {
      duration: 0.1,
    },
  },
  close: {
    hight: '150px',
    width: '150px',
    transition: {
      duration: 0.5,
    }
  }
}


const drawerOPVariants = {
  open: {
    opacity: 1,
    display: 'flex',
    transition: {
      duration: 0.1,
    },
  },
  close: {
    opacity: 0,
    display: 'none',
    transition: {
      duration: 0.5,
    }
  }
}


const Drawer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [ifMobile, setIfMobile] = useState<boolean>(false);

  const handleWindowResize: () => void = () => {
    // Check if phpne or not
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device
      setIfMobile(true);
    } else {
      // false for not mobile device
      setIfMobile(false);
    }
  }

  const PathVariants = {
    open: () =>{
      var percentage = ifMobile ? 450 : 450;
      var posX = ifMobile ? 75 : 110;
      var posY = ifMobile ? 0 : 0;
      return({
      clipPath: `circle(${percentage}% at 60vw ${posY}px)`,
      top: ifMobile ? '0px' : '0px',
      right: ifMobile ? '0px' : '0px',
      transition: {
        type: 'easeInOut',
        delay: 0.1,
        duration: 0.5
      },
    })},
    close: () =>{
      var percentage = ifMobile ? 50 : 30;
      var posX = ifMobile ? 75 : 110;
      var posY = ifMobile ? 100 : 50;
      return({
      clipPath: `circle(${percentage}% at ${posX}px ${posY}px)`,
      top: ifMobile ? '0px' : '0px',
      right: ifMobile ? '0px' : '0px',
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.2
      }
    })}
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <motion.div id='Drawer'
      variants={drawerVariants}
      initial="close"
      animate={isOpen ? "open" : "close"}
    >
      <motion.div className='d_container'
        variants={PathVariants}
        initial={'close'}
        animate={isOpen ? "open" : "close"}
        custom={ifMobile}
      >
        <button
        className='d_tog_btn' onClick={() => { toggleOpen() }} 
        style={{ zIndex: 12, border: 0, outline: 0}}>
          <div id="nav-icon3" className={isOpen?'open':''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <motion.div
          className='d_body'
          variants={drawerOPVariants}
          initial={'close'}
          animate={isOpen ? "open" : "close"}
        >
          <div className='d_header'>
            <span className='d_span_1'>{"Akash \nKumar"}</span>
          </div>
          <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.2, staggerChildren: 0.2, delay: 0.1}}
           className='d_ul'>
            <motion.a className="d_li" onClick={() => { toggleOpen() }} href="#Hero">About Me</motion.a>
            <motion.a className="d_li" onClick={() => { toggleOpen() }} href="#Context">Projects</motion.a>
            <motion.a className="d_li" onClick={() => { toggleOpen() }} href="#tech">Skills</motion.a>
            <motion.a className="d_li" onClick={() => { toggleOpen() }} href="#Blogs">Blogs</motion.a>
            <motion.a className="d_li" onClick={() => { toggleOpen() }} href="#Contact">Hire Me</motion.a>
          </motion.div>
          <div className='d_footer'>
            <motion.div
            initial={{opacity: 0.1, x: -10}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.1, delay: 0.3, staggerChildren: 0.3}}
            className='d_socials'>
              <a href="https://www.linkedin.com/in/akash-mallick">
                <Icon icon="skill-icons:linkedin" />
              </a>
              <a href="https://github.com/Akash-ku-Mallick">
                <Icon icon="akar-icons:github-fill" />
              </a>
              <a href="https://x.com/AkashKu_Mallick?t=S2gKCnCSPXZ303skjIAEwA&s=09">
                <Icon icon="line-md:twitter-x"  style={{color: 'black'}} />
              </a>
              <a href="https://www.instagram.com/whyonbike/">
                <Icon icon="akar-icons:instagram-fill" />
              </a>
            </motion.div>
            <motion.div
            initial={{opacity: 0, x: -10}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.3, delay: 0, staggerChildren: 0.3}}
            className='d_socials'>
              <a href="mailto:akashkumarmallick@outlook.com">
                <Icon icon="vscode-icons:file-type-outlook" />
              </a>
              <a href="tel:+91797896197">
                <Icon icon="mingcute:phone-incoming-fill"  style={{color: '#329bec'}} />
              </a>
            </motion.div>
            <div className='d_copy'>
              <span>© 2021 Akash Kumar Mallick</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}




//           <div className='drawer_body'>
//             <div className='headText' onClick={ScrollToTop}>
//               <span className='span_1'>Akash</span>
//               <span className='span_2'>Kumar</span>
//             </div>
//             <a className="drawer_link" onClick={() => { setDrawerStatus(!drawerStatus) }} href="#Context">Projects</a>
//             <a className="drawer_link" onClick={() => { setDrawerStatus(!drawerStatus) }} href="#Blogs">Blogs</a>
//             <a className="drawer_link" onClick={() => { setDrawerStatus(!drawerStatus) }} href="#Contact">Join Me</a>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// }

/*

<div id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});

*/