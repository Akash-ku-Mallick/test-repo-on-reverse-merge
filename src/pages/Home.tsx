import './App.css';
import {Outlook, LinkedIn, Dribbble, Github, Gmail} from '../vectors/index'
import { easeInOut, spring, useAnimation, useInView } from 'framer-motion';
import { lazy, useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { motion, useScroll } from 'framer-motion';

import Logo64 from '../icons64'
// import MetalBlob from '../Components/MetalBlob'

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";


import {gsap} from 'gsap';
import ScrollTrigger from 'gsap'
import ScrollSmoother from 'gsap'


import Intro from '../Section/Intro';
import Wave from '../vectors/waving';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const appRef = useRef(null)
  const x = useInView(appRef, {margin: '90% 0% 0% 0%'})
  useEffect(()=>{console.log(x)},[x])

  return (
    <div className="App">
        <Intro />
        <Navbar />
        <div className='container'>
        <Hero />
        <Context1 /> 
        <Context2 />
        <Blogs /> 
        <Footer />
        </div>
      </div>
  );
}


/* ______________Codes above this section is CONTAINER OF HOMe SCREEN_______________
___________________Bellow code can be written as a moduler formart
 but for now I am keeping them as 
 a single file to reduce Confusion_____________________________________ */


// _______________ Hero _________________   ------Start


export function Hero() {
  const contextOfHero = "Hi there! I'm Akash Kumar, a passionate developer with a love for creating engaging and interactive designs. I have honed my skills in front-end development, UX design, etc.. My goal is to create beautiful and functional websites that not only look great but also provide a seamless user experience. I believe in the power of design to solve problems and improve people's lives, and I'm always looking for new and innovative ways to push the boundaries of what's possible.When I'm not working on client projects, you can find me tinkering with new technologies, exploring the great outdoors, or sharing my knowledge and expertise through my blog. Thanks for stopping by, and I look forward to connecting with you soon!"
  return(
    <section id="Hero" className='Hero panel' >
      <div className='heroText'> 
      <span className='Heroline1'><Wave/> Hello !!!</span> 
      <br/> 
      <span className='Heroline2'>I am your Friendly </span>
      <br/> 
      <span className='Heroline3'>
      <span>{"<"}</span>
       developer 
      <span>{"/>"}</span>
      </span> 
      </div>
      <motion.div className='ContextOfhero'>{contextOfHero}</motion.div>
    </section>
  )
}

// _______________ Hero _________________   ------End


export function Contact() {
  let rev: string = ''
  function sendForm() {
    // let x = document.querySelector('.RatingForm')
    // let a = x?.querySelector('.in')
    console.log("Sent")
  }
  // export function StarRating() {
//   const [value, setValue] = useState(2);
//   return (
//     <>
//     <Box>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box>
//     <label className='reviewVal'></label>
//     </>
//   );
// }
  return(
    <section id='Contact' className='Contact'>
      <Comments />
      <form className='RatingForm'>
        <input className='f in' name='Name' type='text' placeholder='Enter Your Name..'></input>
        <input name='Mail' type='text' placeholder='Enter Your E-mail ID..'></input>
        <textarea name='comment' placeholder='Tell me something...'></textarea>
        <Rating name="no-value" value={null} />
        <label></label>
        <button onClick={sendForm}>SEND</button>
      </form>
    </section>
  )
}


//___________________________________


export function Comments() {
  return (
    <div id='CommentContainer'>
      <div className='commentUI'>
        <div className='flexRow'> 
          <img></img>
          <label>Anupam </label>
          <div className='jselfRight'>
            <img></img>
            <label>3.5</label>
          </div>
        </div>
        <p>I have nothing to say</p>
      </div>
    </div>
  )
}


// _______________ Context 1 _________________   ------Start

export function Context1() {

  return(
    <section id='Context' className='Context panel'>
      <div className="ProjectCarosol">
        <div className="blueDiv a">
          <div className="prjs"><h1>p1</h1></div>
        </div>
        <div className="redDiv a">
          <div className="prjs"><h1>p1</h1></div>
        </div>
        <div className="greenDiv a">
          <div className="prjs"><h1>p1</h1></div>
        </div>
      </div>
    </section>
  )
}

// _______________ Context 1 _________________   ------End


// _______________ Context 2 _________________   ------Start

export function Context2() {

  return(
    <section id='Context2' className='Context panel'>
      <div className="ProjectCarosol">
        <div className="blueDiv a">
          <div className="prjs"><h1>p1</h1></div>
        </div>
        <div className="redDiv a">
          <div className="prjs"><h1>p1</h1></div>
        </div>
        <div className="greenDiv a">
          <div className="prjs"><h1>p1</h1></div>
        </div>
      </div>
    </section>
  )
}

// _______________ Context 2 _________________   ------End

// _______________ Blogs _________________   ------Start

export function Blogs() {

  return(
    <section id='Blogs' className='Context panel'>
        blogs
    </section>
  )
}

// _______________ Blogs _________________   ------End


// _______________Footer_________________   ------Start


export function Footer() {
  const footerRef = useRef(null);
  const SocialAnimete = useAnimation();

  const footerInView: boolean = useInView(footerRef, {margin: '0% 0% -50% 0%'});

  useEffect(()=>{
    SocialAnimete.stop()
    if(footerInView) {
      SocialAnimete.start('originMount') 
    }
    else {
      SocialAnimete.start('sideMount') 
    }
  },[footerInView])


    return (
      <section id="Footer" className="Footer panel" ref={footerRef}>
        <Contact />
        <motion.div
          className="Socials SoLinkCol"
          variants={{
            sideMount: { opacity: 1, bottom: 0 },
            originMount: { opacity: 1, bottom: '-50vh' },
          }}
          animate={SocialAnimete}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        >
          <SocialLinks />
        </motion.div>
        <div className='flexRow'>
          <div className='bordR footdesc'>
          <h3>Services</h3>
          </div>
          <div className='bordR footdesc'>
          <h3>Works</h3>
          </div>
          <div className='bordR footdesc'>
          <h3>Links</h3>
          <div className="Socials SoLinkRow">
          <SocialLinks />
          </div>
          </div>
        </div>
        
        <span className="copyright">
          Copyright reserved under Akash kumar Mallick
        </span>
        <Tooltip
          id="Footer-tooltip" style={{}}/>
      </section>
    );
  }


export function SocialLinks() {
  return (
    <>
      <a href="linkedin" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Let's connect<br /> through Linkedin<br /> It will be fun" ><LinkedIn /></a>
        <a href="Outlook" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Want to send <br />an e-mail<br /> Just tap here" ><Outlook /></a>
        <a href="Dribbble" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Check out my mockups<br /> and designes<br /> on Dtibbble<br />Thank You" ><Dribbble /></a>
        <a href="Github" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Check my current work <br />by visiting directly <br />to my Github Page <br /> Don't forget to follw me there" ><Github /></a>
        <a href="Gmail" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Mail or Meet can be arrenged <br />" ><Gmail /></a>
    </>
  )
}


//  _______________Footer_________________   ------End




 



function Header() {
  return (
    <section className="Header">
      <Logo64 />
      <a href="https://akash-ku-mallick.github.io/Akash-Kumar-Website/">
        <h3>Akash Kumar</h3> </a>
    </section>
  );
}

function Navbar() {
  return(
    <section className="Navbar">
      <Header />
      <button><a href="#Context">CONTEXT</a></button>
      <button><a href="#Context2">CONTEXT2</a></button>
      <button><a href="#Blogs">Blogs</a></button>
      <button><a href="#Contact">CONTACT</a></button>
      <button><Link to="/Akash-Kumar/Working">PROJECTS</Link></button>
      </section>
    )
}

export function WorkNavBar() {
  return(
    <section className="Navbar">
      <Link to="/Akash-Kumar">Home</Link>
      </section>
    )
}


// _______________ Exports _________________   ------