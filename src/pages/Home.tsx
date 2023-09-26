import './App.css';
import {Outlook, LinkedIn, Dribbble, Github, Gmail} from '../vectors/index'
import { motion, useAnimation, useInView } from 'framer-motion';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { motion as motion3d }  from 'framer-motion-3d';
import Scene from '../Section/Scene';

import Blogs from '../Section/Blogs';
import Context1 from '../Section/Context1';


import Logo64 from '../icons64'
// import MetalBlob from '../Components/MetalBlob'


import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';


import {gsap} from 'gsap';
import ScrollTrigger from 'gsap'
import ScrollSmoother from 'gsap'

import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import useSpline from '@splinetool/r3f-spline';


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
        <Scene props={windowSize} />
        <Navbar />
        <div className='container'>
        <Hero />
        <Context1 /> 
        <Context2 props={windowSize} />
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
  const contextOfHero = "I am an immediate joiner, looking for better opportunity as a front-end developer"
  return(
    <section id="Hero" className='Hero panel' >
      <div className='cirlcle hrimg' />
      <p>{contextOfHero}</p>
    </section>
  )
}

// _______________ Hero _________________   ------End


export function Contact() {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(4);
  function sendForm() {
    console.log(name, mail, comment, rating);
    
    console.log("Sent")
  }

const updateMail = (event: React.ChangeEvent<HTMLInputElement>) => {
  setMail(event.target.value);
}

const updateComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setComment(event.target.value);
}

const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
}

const labels: { [index: string]: string } = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};


  return (
    <section id="Contact" className="Contact">
      <Comments />
      <form className="RatingForm glass">
        <input
          className="input"
          value={name}
          onChange={updateName}
          name="Name"
          type="text"
          placeholder="Enter Your Name.."
        />
        <input
          className="input"
          onChange={updateMail}
          value={mail}
          name="Mail"
          type="text"
          placeholder="Enter Your E-mail ID.."
        />
        <textarea
          className="input"
          onChange={updateComment}
          value={comment}
          name="comment"
          placeholder="Tell me something..."
        />
        <span>
          <Rating
            name="text-feedback"
            value={rating}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            onChange={(event, newValue) => {
              newValue !== null ? setRating(newValue) : setRating(1);
            }}
          />
          <p>{labels[rating]}</p>
        </span>
        <button onClick={sendForm}>SEND</button>
      </form>
    </section>
  );
}


//___________________________________


export function Comments() {
  return (
    <div id='CommentContainer'>
      <div className='commentUI glass'>
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




// _______________ Context 2 _________________   ------Start

export function Context2(props: any){

  const { nodes, materials } = useSpline('https://prod.spline.design/eqB7rgLL1IBZPM7S/scene.splinecode')
  const ref = useRef(null);
  

  const isInView = useInView(ref, { once: false});

  return(
    <section id='Context2'  className='Context panel'>
      <h2>Skills</h2>
      <Suspense fallback={null}>
        <Canvas id='TecchCanvas' ref={ref} shadows flat linear>
          
        <OrthographicCamera
          name="Camera"
          makeDefault={true}
          zoom={0.9}
          far={100000}
          near={-100000}
          position={[0, 0, 1000.05]}
          rotation={[0, 0, 0]}
          scale={1}
        />
          <ambientLight intensity={0.5} />
        <group name="Enviroment" position={[160.29, 682.97, 1256.27]}>
          <directionalLight
            name="Directional Light 2"
            castShadow
            intensity={2.23}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[522.1, -71.64, 44.85]}
            rotation={[-Math.PI, -0.37, -Math.PI]}
            scale={[1.73, 1, 0.9]}
          />
        </group>
        <motion3d.group 
          
          name="TEchIcons" position={[0, 0, 0]}>
          <group
           name="Firebase" position={[0, (-props.props[1]/2)+50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh 
              name="Firebase1"
              geometry={nodes.Firebase1.geometry}
              material={materials['fireb mat']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="Firebase2"
              geometry={nodes.Firebase2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
          <group name="Three" position={[(-props.props[0]/2)+50, 0, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="Three1"
              geometry={nodes.Three1.geometry}
              material={materials['Three1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="Three2"
              geometry={nodes.Three2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
          <group name="GitHub" position={[(props.props[0]/2)-50, 0, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="GitHub1"
              geometry={nodes.GitHub1.geometry}
              material={materials.githubmat}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="GitHub2"
              geometry={nodes.GitHub2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
          <group
          name="Java" position={[(props.props[0]/4), (-props.props[1]/2)+50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="Java1"
              geometry={nodes.Java1.geometry}
              material={materials['Java1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="Java2" geometry={nodes.Java2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="Cpp" position={[(-props.props[0]/2)+50, (-props.props[1]/2)+50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="Cpp1"
              geometry={nodes.Cpp1.geometry}
              material={materials['Cpp1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="Cpp2" geometry={nodes.Cpp2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="c" position={[(-props.props[0]/4)+25, (-props.props[1]/2)+50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="c1"
              geometry={nodes.c1.geometry}
              material={materials['c1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="c2" geometry={nodes.c2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="React" position={[(-props.props[0]/2)+50, (props.props[1]/2)-50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="React1"
              geometry={nodes.React1.geometry}
              material={materials['React1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="React2"
              geometry={nodes.React2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
          <group name="python" position={[(props.props[0]/2)-50, (-props.props[1]/2)+50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="python1"
              geometry={nodes.python1.geometry}
              material={materials['python1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="python2"
              geometry={nodes.python2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
          <group name="git" position={[(-props.props[1]/4)+25, 0, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="git1"
              geometry={nodes.git1.geometry}
              material={materials['git1 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="git2" geometry={nodes.git2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="Typescript" position={[(-props.props[0]/4), (props.props[1]/2)-50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="Typescript1"
              geometry={nodes.Typescript1.geometry}
              material={materials['ts mat']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="Typescript2"
              geometry={nodes.Typescript2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
          <group name="JS" position={[0, (props.props[1]/2)-50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="JS1"
              geometry={nodes.JS1.geometry}
              material={materials['js mat']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="JS2" geometry={nodes.JS2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="CSS" position={[(props.props[0]/2)-50, (props.props[1]/2)-50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="CSS1"
              geometry={nodes.CSS1.geometry}
              material={materials.css}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="CSS2" geometry={nodes.CSS2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="html" position={[(props.props[0]/4)-25, (props.props[1]/2)-50, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="html1"
              geometry={nodes.html1.geometry}
              material={materials['html m']}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh name="html2" geometry={nodes.html2.geometry} material={materials['']} position={[0, -25.32, -1.03]} />
          </group>
          <group name="Figma" position={[(props.props[1]/4)-25, 0, 0]} scale={[1.93, 1.88, 1.3]}>
            <mesh
              name="Figma1"
              geometry={nodes.Figma1.geometry}
              material={materials.figma}
              castShadow
              receiveShadow
              position={[0, 0, -1.5]}
            />
            <mesh
              name="Figma2"
              geometry={nodes.Figma2.geometry}
              material={materials['']}
              position={[0, -25.32, -1.03]}
            />
          </group>
        </motion3d.group>
          
        </Canvas>
      </Suspense>
    </section>
  )
}

// _______________ Context 2 _________________   ------End


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