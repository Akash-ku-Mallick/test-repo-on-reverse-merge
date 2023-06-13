import React, { Suspense, useRef, useState } from 'react'
import { motion } from "framer-motion"


import useSpline from '@splinetool/r3f-spline'
import { OrbitControls } from '@react-three/drei'
import '@react-three/fiber'

import { Canvas } from '@react-three/fiber'
import Scene from './Scene'





export default function Intro({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/eqB7rgLL1IBZPM7S/scene.splinecode')
  const [clickEvent, setClickEvent] = useState(false)
  const canvasRef = useRef(null);
  return (
    
    <motion.div
    id='Intro'
    initial={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        position: 'fixed',
        top:0, zIndex: 12345,
        alignSelf: 'center'}}
    animate={{
        animation: 'ease-in-out',
        top: clickEvent?'-110vh':0,
    }}
    transition={{
        duration: 1
    }}>
      <Suspense fallback={null}>
      <Canvas shadows flat linear ref={canvasRef}>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
    <button style={{position: 'absolute',bottom: 0, left: '50%', height: '50px', width: '70px'}} onClick={()=>{setClickEvent(!clickEvent)}}></button>
    </motion.div>
  )
}
