import React, { Suspense, useRef, useState } from 'react'
import { motion, useAnimate } from "framer-motion"


// import { PointerLockControls } from '@react-three/drei'
// import { OrbitControls } from '@react-three/drei'
import '@react-three/fiber'

import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

import '../pages/App.css'


export default function Intro({ ...props }) {
  const [clickEvent, setClickEvent] = useState(false);

  const BtnTxtAnim = {
    init: {
      opacity: 0,
      scale: 0.5,
    },
    click: {
      opacity: 0,
      rotateZ: [0, 270],
      scale: 0.5,
    },
    hover: {
      opacity: 1,
      rotateZ: [0, 90],
      scale: 1.2,
    }
  }

  const BtnAnimation = {
    init: {
      borderRadius: '23%',
      backgroundColor: 'black',
      border: '3px solid',
      borderColor: 'white',
    },
    hover: {
      borderRadius: '50%',
      backgroundColor: 'white',
      scale: 1.4,
      rotateZ: [0, 90, -45]
    },
    click: {
      backgroundColor: 'white',
      rotateZ: [-45, 90],
      scale: 0.8,
      transition: {duration: 0.2, ease: 'easeInOut'},
    },
    mobile: {
      borderRadius: ['23%', '50%', '2%'],
      backgroundColor: 'black',
      border: '5px solid',
      borderColor: 'white',
      transition: {duration: 2, ease: 'easeInOut', yoyo: Infinity, repeat: Infinity},
      rotateZ: [0, 90, -45],
    }
  }


  return (
    <motion.div
      id="Intro"
      initial={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        zIndex: 12345,
        alignSelf: "center",
      }}
      animate={{
        animation: "ease-in-out",
        top: clickEvent ? "-110vh" : 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <Suspense fallback={null}>
        <Canvas shadows flat linear>
          <Scene />
          
        </Canvas>
      </Suspense>

      <motion.div
        className="CloseBTNWrapper CloseBTN"
        variants={BtnAnimation}
        initial="init"
        animate="init"
        whileTap="click"
        whileHover="hover"
        transition={{ duration: 0.2, power: 4 }}
        onClick={() => {
          setClickEvent(!clickEvent);
        }}>
        <motion.div className="CloseBTAr" variants={BtnTxtAnim}
        initial='init'
        whileHover='click'>
          <svg
            width="0"
            height="0"
            viewBox="0 0 24 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="shape">
                <path
                  d="M10.9393 56.0697C11.5251 56.6555 12.4749 56.6555 13.0607 56.0697L22.6066 46.5238C23.1924 45.938 23.1924 44.9883 22.6066 44.4025C22.0208 43.8167 21.0711 43.8167 20.4853 44.4025L12 52.8878L3.51472 44.4025C2.92893 43.8167 1.97919 43.8167 1.3934 44.4025C0.807612 44.9883 0.807612 45.938 1.3934 46.5238L10.9393 56.0697ZM10.5 0L10.5 55.0091H13.5L13.5 0L10.5 0Z"
                  fill="black"
                  fill-opacity="0.77"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            id="test"
            width="24"
            height="57"
            viewBox="0 0 24 57"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9393 56.0697C11.5251 56.6555 12.4749 56.6555 13.0607 56.0697L22.6066 46.5238C23.1924 45.938 23.1924 44.9883 22.6066 44.4025C22.0208 43.8167 21.0711 43.8167 20.4853 44.4025L12 52.8878L3.51472 44.4025C2.92893 43.8167 1.97919 43.8167 1.3934 44.4025C0.807612 44.9883 0.807612 45.938 1.3934 46.5238L10.9393 56.0697ZM10.5 0L10.5 55.0091H13.5L13.5 0L10.5 0Z"
              fill="white"
              fill-opacity="0"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}