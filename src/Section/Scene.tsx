
import useSpline from '@splinetool/r3f-spline'
import { PerspectiveCamera } from '@react-three/drei'


import { motion } from 'framer-motion-3d'
import { Suspense, useEffect, useRef, useState } from 'react'
import { motion as motion2d, useAnimation } from 'framer-motion'

import '@react-three/fiber'

import { Canvas } from '@react-three/fiber'
import '../pages/App.css'





export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/eqB7rgLL1IBZPM7S/scene.splinecode')
  
  
  const [clickEvent, setClickEvent] = useState(false);

  const timeAnimate = {
    hidden: {
      visible: false,
      y: 50,
      transition: {
        duration: 0.12
      }
    },
    visible: {
      y:  35,
      visible: true,
      transition: {
        duration: 0.12
      }
    },
    top: {
      y: 110,
      x: -90,
      scale: 0.17,
    },
    middle: {
      y: 0,
      x: 0,
      scale: 1,
    }
  }
  
  
  const phoneAnimate = {
    init: {scale: 0},
    phoneIntro: {
      scale: [0, 0.4, 0.8, 0.9, 1.8, 1.4, 1],
      x: [0, 0, 0, 0, 0, 0, (props.props[1]/8*2)],
      y: [0, 0, 0, 0, 0, 0, 0],
      z: [0, 0, 0, 0, 0, 0, 0],
      rotateX: [0, -0.05, -0.1, -1.2, -0.1, 0, 0],
      rotateY: [0, 0.2, 0.8, 0.9, 2, 4, 6.2],
      rotateZ: [0, 0, 0, 0, 0, 0],
      transition: {duration: 2, delay: 10}
    },
    final: {
      scale: 1,
      x: (props.props[1]/8*2),
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 6.2,
      rotateZ: 0,
      transition: {duration: 0.2}
    },
    horizontal: {
      scale: 1,
      x: (props.props[1]/8*3),
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 6.2,
      rotateZ: 1.575,
      transition: {duration: 0.5}
    },
    vertical: {
      scale: 1,
      x: (props.props[1]/8*2),
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 6.2,
      rotateZ: 0,
    },
    small: {
      z: -40,
    },
    large: {
      z: 40,
    },
    top: {
  
    },
    full: {
  
    },
    hidden: {
      visible: false,
      transition: {
        duration: 0.12
      }
    },
    visible: {
      visible: true,
      transition: {
        duration: 0.12
      }
    }
  }

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

  const sidebarRef = useRef(null)
  const phoneObj = useRef(null)
  const timeObjRef = useAnimation()
  const dateObjRef = useAnimation()
  const phoneAnim = useAnimation()
  const ALSvisibAnim = useAnimation()
  const DefLSvisibAnim = useAnimation()
  const HSvisibAnim = useAnimation()
  // props.props[0] is width
  // props.props[1] is height


  useEffect(() => {let x=document.getElementById('sideBar');
    console.log(x?.offsetHeight, x?.offsetWidth)}, [sidebarRef])


  function AboutEffect () {
    dateObjRef.start('visible')
    timeObjRef.start('middle')
    ALSvisibAnim.start('hidden')
    HSvisibAnim.start('hidden')
    DefLSvisibAnim.start('visible')
    dateObjRef.start('visible')
  }

  function BlogsEffect () {
    dateObjRef.start('visible')
    timeObjRef.start('middle')
    HSvisibAnim.start('hidden')
    DefLSvisibAnim.start('hidden')
    ALSvisibAnim.start('visible')
  }

  function ProjectsEffect () {
    dateObjRef.start('visible')
    timeObjRef.start('middle')
    HSvisibAnim.start('hidden')
    DefLSvisibAnim.start('hidden')
    ALSvisibAnim.start('visible')
    phoneAnim.start('horizontal')
  }

  function ContactMeEffect () {
    dateObjRef.start('hidden')
    timeObjRef.start('top')
    ALSvisibAnim.start('hidden')
    DefLSvisibAnim.start('hidden')
    HSvisibAnim.start('visible')
    phoneAnim.start('vertical')
  }

  // useEffect(()=>{phoneAnim.start({animation=''})},[phoneObj])
  
  
  return (
    <motion2d.div
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
        <Canvas id='introCanvas' shadows flat linear>
      <>
      <color attach="background" args={['#000000']} />
      <group {...props} dispose={null}>
        <group
          name="optionbarOption"
          visible={false}
          position={[-1638.41, 1074.14, -618.96]}
          scale={[0.86, 0.86, 1.09]}
        >
          <mesh
            name="Text1"
            geometry={nodes.Text1.geometry}
            material={materials.optiontxt}
            position={[0, -28.53, 0.46]}
            scale={0.86}
          />
          <mesh
            name="option1"
            geometry={nodes.option1.geometry}
            material={materials.optionbg}
            position={[0, -3.57, -0.46]}
            scale={0.92}
          />
        </group>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={8}
          fov={35}
          position={[0, 0, 1500]}
          rotation={[0, 0, 0]}
        /> 
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

        <motion.group variants={phoneAnimate}
        initial="hidden"  name="Sidebar Instance" position={[-props.props[0]*3/4, (props.props[1]*1/4), -3.25]} scale={[0.40, 0.40, 0.89]}>
          <group name="option11" position={[4.79, 119.8, -30]}>
            <mesh
              name="Text11"
              geometry={nodes.Text11.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option12"
              geometry={nodes.option12.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </group>
          <group name="option1 Instance" position={[673.86, 119.8, -20]}>
            <mesh
              name="Text12"
              geometry={nodes.Text12.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option13"
              geometry={nodes.option13.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </group>
          <group name="option1 Instance 2" position={[1342.93, 119.8, -10]}>
            <mesh
              name="Text13"
              geometry={nodes.Text13.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option14"
              geometry={nodes.option14.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </group>
          <group name="option1 Instance 3" position={[2012, 119.8, 0]}>
            <mesh
              name="Text14"
              geometry={nodes.Text14.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option15"
              geometry={nodes.option15.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </group>
        </motion.group>
        <motion.group 
        variants={phoneAnimate}
        initial="hidden"
        animate="visible"
        name="Sidebar" 
        ref={sidebarRef}
        position={[(-props.props[1]), -30, -10]} scale={[0.4, 0.4, 0.4]}>
          <motion.group whileHover={{scale: 1.2}}
          onClick={AboutEffect}
           name="option16" position={[0, 507.26, 0]}>
            <mesh
              name="Text15"
              geometry={nodes.Text15.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option17"
              geometry={nodes.option17.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </motion.group>
          <motion.group whileHover={{scale: 1.2}}
          onClick={ProjectsEffect}
          name="option1 Instance1" position={[0, 250.48, 0]}>
            <mesh
              name="Text16"
              geometry={nodes.Text16.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option18"
              geometry={nodes.option18.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </motion.group>
          <motion.group whileHover={{scale: 1.2}}
          onClick={BlogsEffect}
          name="option1 Instance 21" position={[0, -6.3, 0]}>
            <mesh
              name="Text17"
              geometry={nodes.Text17.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option19"
              geometry={nodes.option19.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </motion.group>
          <motion.group whileHover={{scale: 1.2}}
          onClick={ContactMeEffect} name="option1 Instance 31" position={[0, -263.08, 0]}>
            <mesh
              name="Text18"
              geometry={nodes.Text18.geometry}
              material={materials.optiontxt}
              position={[0, -28.53, 0.46]}
              scale={0.86}
            />
            <mesh
              name="option110"
              geometry={nodes.option110.geometry}
              material={materials.optionbg}
              position={[0, -3.57, -0.46]}
              scale={0.92}
            />
          </motion.group>
        </motion.group>
        
        <motion.group variants={phoneAnimate} ref={phoneObj}
        animate={phoneAnim}
        name="iPhone 14 Pro" position={[(props.props[1]/8*2), 0, 0]}>
          <mesh
            name="signal"
            geometry={nodes.signal.geometry}
            material={materials['signal Material']}
            position={[80.34, 248.94, 24.01]}
            rotation={[0, 0.09, 0]}
            scale={0.15}
          />
          <group name="Dynamic Island" position={[-11.4, 260.62, 21.01]}>
            <group name="Group" position={[11.58, -12.26, 1.28]} rotation={[0, 0, 0]} scale={1}>
              <mesh
                name="Ellipse 2"
                geometry={nodes['Ellipse 2'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[27.83, 0, -0.35]}
              />
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[27.83, 0, -0.81]}
              />
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[0, 0, -1.07]}
              />
            </group>
            <mesh
              name="Rectangle 5"
              geometry={nodes['Rectangle 5'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[11.5, 8.79, -0.01]}
            />
          </group>
          <group name="Connectors" position={[0.1, 7.83, 4.12]}>
            <mesh
              name="Rectangle 4"
              geometry={nodes['Rectangle 4'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[76.09, 137.8, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={1}
            />
            <mesh
              name="Rectangle 3"
              geometry={nodes['Rectangle 3'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[-62.45, -137.8, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={1}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes['Rectangle 2'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[0, -215.43, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[0, 210.74, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group name="Bottom Details" position={[7.91, -261.25, 4.12]}>
            <mesh
              name="Ellipse 6"
              geometry={nodes['Ellipse 6'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[-35.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse 5"
              geometry={nodes['Ellipse 5'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[59.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse 61"
              geometry={nodes['Ellipse 61'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[-51.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse 4"
              geometry={nodes['Ellipse 4'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[51.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse 3"
              geometry={nodes['Ellipse 3'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[43.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse 62"
              geometry={nodes['Ellipse 62'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[-59.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse 21"
              geometry={nodes['Ellipse 21'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[35.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[20.18, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Rectangle 21"
              geometry={nodes['Rectangle 21'].geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[-7.82, -0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Rectangle2"
              geometry={nodes.Rectangle2.geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[-7.82, 0.08, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group
            name="Logo"
            position={[26.43, 67.14, -10.68]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.07, 0.07, 0]}
          >
            <mesh
              name="Untitled"
              geometry={nodes.Untitled.geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[181, -238, 0]}
            />
            <mesh
              name="Untitled1"
              geometry={nodes.Untitled1.geometry}
              material={materials['Pink Items']}
              castShadow
              receiveShadow
              position={[423, -1, 0.01]}
            />
          </group>
          <group name="Camera1" position={[53.08, 198.93, -18.9]} rotation={[0, 0, 0]} scale={1.16}>
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials['camera hold inner']}
              castShadow
              receiveShadow
              position={[0.24, -2.53, -1.13]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.86}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Metal}
              castShadow
              receiveShadow
              position={[0.24, -2.53, -1.81]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.86}
            />
            <group name="Light" position={[-25.87, 36.93, -1.91]} rotation={[0, 0, 0]} scale={[0.94, 0.94, 0.85]}>
              <mesh
                name="Ellipse2"
                geometry={nodes.Ellipse2.geometry}
                material={materials['Camera Lens 2 Inner']}
                castShadow
                receiveShadow
                position={[0.13, 0.39, -2.25]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 1.11]}
              />
              <mesh
                name="Ellipse 22"
                geometry={nodes['Ellipse 22'].geometry}
                material={materials['Camera Lens 2']}
                castShadow
                receiveShadow
                position={[0, 0, 0.66]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.91, 0.91, 1]}
              />
              <mesh
                name="Ellipse3"
                geometry={nodes.Ellipse3.geometry}
                material={materials['Camera Lens 2']}
                castShadow
                receiveShadow
                position={[0, 0, 0.34]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.91, 0.91, 1]}
              />
            </group>
            <mesh
              name="Ellipse 31"
              geometry={nodes['Ellipse 31'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-25.87, -41.02, -1.38]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[0.86, 0.86, 0.85]}
            />
            <group name="Cam2 2" position={[25.45, -30.01, -0.78]} rotation={[0, 0, 0]} scale={0.86}>
              <mesh
                name="Ellipse 7"
                geometry={nodes['Ellipse 7'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[0, 0, 0.93]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 63"
                geometry={nodes['Ellipse 63'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[0, 0, 0.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 10"
                geometry={nodes['Ellipse 10'].geometry}
                material={materials['glass lenses']}
                castShadow
                receiveShadow
                position={[-0.17, -0.12, -2.07]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 51"
                geometry={nodes['Ellipse 51'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-0.17, -0.12, 1.1]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 41"
                geometry={nodes['Ellipse 41'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-0.5, -0.19, 1.6]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 9"
                geometry={nodes['Ellipse 9'].geometry}
                material={materials.hand}
                castShadow
                receiveShadow
                position={[-3.5, 2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={0.5}
              />
              <mesh
                name="Ellipse 8"
                geometry={nodes['Ellipse 8'].geometry}
                material={materials.hand}
                castShadow
                receiveShadow
                position={[1.5, -2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 32"
                geometry={nodes['Ellipse 32'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[-0.5, 0, 2.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
            <group name="Cam2" position={[-25.3, -2.16, -0.78]} rotation={[0, 0, 0]} scale={0.86}>
              <mesh
                name="Ellipse 71"
                geometry={nodes['Ellipse 71'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[0, 0, 0.93]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 64"
                geometry={nodes['Ellipse 64'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[0, 0, 0.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 101"
                geometry={nodes['Ellipse 101'].geometry}
                material={materials['glass lenses']}
                castShadow
                receiveShadow
                position={[-0.17, -0.12, -2.07]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 52"
                geometry={nodes['Ellipse 52'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-0.17, -0.12, 1.1]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 42"
                geometry={nodes['Ellipse 42'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-0.5, -0.19, 1.6]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 91"
                geometry={nodes['Ellipse 91'].geometry}
                material={materials.hand}
                castShadow
                receiveShadow
                position={[-3.5, 2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={0.5}
              />
              <mesh
                name="Ellipse 81"
                geometry={nodes['Ellipse 81'].geometry}
                material={materials.hand}
                castShadow
                receiveShadow
                position={[1.5, -2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 33"
                geometry={nodes['Ellipse 33'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[-0.5, 0, 2.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
            <group name="Cam1" position={[26.18, 23.96, -0.78]} rotation={[0, 0, 0]} scale={0.86}>
              <mesh
                name="Ellipse 72"
                geometry={nodes['Ellipse 72'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[0, 0, 0.93]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 65"
                geometry={nodes['Ellipse 65'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[0, 0, 0.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 102"
                geometry={nodes['Ellipse 102'].geometry}
                material={materials['glass lenses']}
                castShadow
                receiveShadow
                position={[-0.17, -0.12, -2.07]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 53"
                geometry={nodes['Ellipse 53'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-0.17, -0.12, 1.1]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 43"
                geometry={nodes['Ellipse 43'].geometry}
                material={materials['Untitled Material']}
                castShadow
                receiveShadow
                position={[-0.5, -0.19, 1.6]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 92"
                geometry={nodes['Ellipse 92'].geometry}
                material={materials.hand}
                castShadow
                receiveShadow
                position={[-3.5, 2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={0.5}
              />
              <mesh
                name="Ellipse 82"
                geometry={nodes['Ellipse 82'].geometry}
                material={materials.hand}
                castShadow
                receiveShadow
                position={[1.5, -2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                name="Ellipse 34"
                geometry={nodes['Ellipse 34'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[-0.5, 0, 2.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
          </group>
          <group name="Body-Screen" position={[10.73, 26.77, 0.95]} rotation={[0, 0, 0]} scale={[1.02, 1.02, 1.04]}>
            <mesh
              name="Screen Border"
              geometry={nodes['Screen Border'].geometry}
              material={materials['Black Border']}
              castShadow
              receiveShadow
              position={[-10.45, -18.61, 14.39]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[1.08, 1.08, 1.06]}
            />
            <mesh
              name="Back Side"
              geometry={nodes['Back Side'].geometry}
              material={materials.Metal}
              castShadow
              receiveShadow
              position={[-10.04, -18.07, -9.56]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[1.08, 1.08, 1.06]}
            />
            <group name="Left Buttons" position={[-139.66, 74.64, 0.26]} scale={[0.98, 0.98, 0.96]}>
              <mesh
                name="Ellipse4"
                geometry={nodes.Ellipse4.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-0.02, -262.95, -0.09]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle 9"
                geometry={nodes['Rectangle 9'].geometry}
                material={materials['Rectangle 9 Material']}
                castShadow
                receiveShadow
                position={[0.77, 61.22, -0.26]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
              <mesh
                name="Rectangle 8"
                geometry={nodes['Rectangle 8'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-1.51, 61.24, 2.07]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
              <mesh
                name="Rectangle 7"
                geometry={nodes['Rectangle 7'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-1.51, 11.96, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
              <mesh
                name="Rectangle 11"
                geometry={nodes['Rectangle 11'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0.24, -241.12, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
              <mesh
                name="Rectangle 10"
                geometry={nodes['Rectangle 10'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[0.54, -241.12, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
              <mesh
                name="Rectangle 51"
                geometry={nodes['Rectangle 51'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-1.51, -38.91, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
            </group>
            <group name="Right Buttons" position={[118.57, -3.06, 0.26]} scale={[0.98, 0.98, 0.96]}>
              <mesh
                name="Button"
                geometry={nodes.Button.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-0.25, -60.23, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
              <mesh
                name="Button1"
                geometry={nodes.Button1.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-1.53, 51.46, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.04, 1.02, 1.02]}
              />
            </group>
            <mesh
              name="Metal Border"
              geometry={nodes['Metal Border'].geometry}
              material={materials.Metal}
              castShadow
              receiveShadow
              position={[-10.45, -18.61, 13.04]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[1.08, 1.08, 1.06]}
            />
          </group>
          <motion.group
          variants={phoneAnimate}
          initial="hidden"
          animate={HSvisibAnim} name="HomeScreen" position={[-1.35, 7.34, 20]}>
            <group name="Group 6" position={[0.25, -212.33, 0]}>
              <mesh
                name="Maps"
                geometry={nodes.Maps.geometry}
                material={materials['Maps Material']}
                position={[-24.67, 0, 2]}
              />
              <mesh
                name="Dialer"
                geometry={nodes.Dialer.geometry}
                material={materials['Dialer Material']}
                position={[74, 0, 2]}
              />
              <mesh
                name="Safari"
                geometry={nodes.Safari.geometry}
                material={materials['Safari Material']}
                position={[24.67, 0, 2]}
              />
              <mesh
                name="chat"
                geometry={nodes.chat.geometry}
                material={materials['chat Material']}
                position={[-74, 0, 2]}
              />
              <mesh
                name="BottomDoc"
                geometry={nodes.BottomDoc.geometry}
                material={materials.bottomdoc}
                position={[-0.33, -6.21, -1.27]}
              />
            </group>
            <mesh
              name="Screen"
              geometry={nodes.Screen.geometry}
              material={materials.screen}
              position={[-0.02, 0.49, -1.82]}
            />
            <group name="iConLayout" position={[3.76, 52.51, 0]}>
              <mesh
                name="Rectangle 27"
                geometry={nodes['Rectangle 27'].geometry}
                material={materials['Rectangle 27 Material']}
                castShadow
                receiveShadow
                position={[-56.9, 114.51, -1.5]}
                scale={[2.5, 2.5, 1]}
              />
              <mesh
                name="Rectangle 16"
                geometry={nodes['Rectangle 16'].geometry}
                material={materials['Rectangle 16 Material']}
                castShadow
                receiveShadow
                position={[55.1, 114.51, -1.5]}
                scale={[2.6, 2.6, 1]}
              />
              <group name="Icon24" position={[24.63, 12.54, 0]}>
                <mesh
                  name="icon11"
                  geometry={nodes.icon11.geometry}
                  material={materials.measureicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text"
                  geometry={nodes.Text.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <motion.group
              whileHover={{ scale: 1.1 }}
              name="Icon23/ig" position={[24.63, -36.81, 0]}>
                <mesh
                  name="icon11/IG"
                  geometry={nodes['icon11/IG'].geometry}
                  material={materials.igicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text2"
                  geometry={nodes.Text2.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <motion.group 
              whileHover={{ scale: 1.1 }}
               name="Icon22/Dribbble" position={[24.63, -86.17, 0]}>
                <motion.mesh whileHover={{ scale: 1.1 }}
                  name="icon111"
                  geometry={nodes.icon111.geometry}
                  material={materials.dribbbleicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text3"
                  geometry={nodes.Text3.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <group name="Icon21" position={[24.63, -135.52, 0]}>
                <mesh
                  name="icon112"
                  geometry={nodes.icon112.geometry}
                  material={materials.storeicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text4"
                  geometry={nodes.Text4.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <group name="Icon31" position={[-27.36, -135.52, 0]}>
                <mesh
                  name="icon113"
                  geometry={nodes.icon113.geometry}
                  material={materials.settingicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text5"
                  geometry={nodes.Text5.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <motion.group whileHover={{ scale: 1.1 }} name="Icon32/GitHub" position={[-27.36, -86.17, 0]}>
                <mesh 
                  name="icon114"
                  geometry={nodes.icon114.geometry}
                  material={materials.giticon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text6"
                  geometry={nodes.Text6.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <motion.group whileHover={{ scale: 1.1 }} name="Icon33/Linkedin" position={[-27.36, -36.81, 0]}>
                <mesh
                  name="icon115"
                  geometry={nodes.icon115.geometry}
                  material={materials.linkedinicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text7"
                  geometry={nodes.Text7.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <motion.group whileHover={{ scale: 1.1 }} name="Icon34/fb" position={[-27.36, 12.54, 0]}>
                <mesh
                  name="icon116"
                  geometry={nodes.icon116.geometry}
                  material={materials.fbicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text8"
                  geometry={nodes.Text8.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <motion.group whileHover={{ scale: 1.1 }} name="Icon41/Gmail" position={[-80.56, -135.52, 0]}>
                <mesh
                  name="icon117"
                  geometry={nodes.icon117.geometry}
                  material={materials.gmailicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text9"
                  geometry={nodes.Text9.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <group name="Icon42" position={[-80.56, -86.17, 0]}>
                <mesh
                  name="icon118"
                  geometry={nodes.icon118.geometry}
                  material={materials.musicIcon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text10"
                  geometry={nodes.Text10.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <group name="Icon43/disabled" position={[-80.56, -36.81, 0]}>
                <mesh
                  name="icon119"
                  geometry={nodes.icon119.geometry}
                  material={materials['icon119 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text19"
                  geometry={nodes.Text19.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <motion.group whileHover={{ scale: 1.1 }} name="Icon44" position={[-80.56, 12.54, 0]}>
                <mesh
                  name="icon1110"
                  geometry={nodes.icon1110.geometry}
                  material={materials.mailicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text20"
                  geometry={nodes.Text20.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <motion.group whileHover={{ scale: 1.1 }} name="Icon14/Outlook" position={[80.23, 12.54, 0]}>
                <mesh
                  name="icon1111"
                  geometry={nodes.icon1111.geometry}
                  material={materials.outlookicon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text21"
                  geometry={nodes.Text21.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </motion.group>
              <group name="Icon13" position={[80.23, -36.81, 0]}>
                <mesh
                  name="icon1112"
                  geometry={nodes.icon1112.geometry}
                  material={materials.memoIcon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text22"
                  geometry={nodes.Text22.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <group name="Icon12" position={[80.23, -86.17, 0]}>
                <mesh
                  name="icon1113"
                  geometry={nodes.icon1113.geometry}
                  material={materials.fileIcon}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text23"
                  geometry={nodes.Text23.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
              <group name="Icon11 Instance" position={[80.23, -135.52, 0]}>
                <mesh
                  name="icon1114"
                  geometry={nodes.icon1114.geometry}
                  material={materials.LogoMat}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Text24"
                  geometry={nodes.Text24.geometry}
                  material={materials.LOGOtxt}
                  castShadow
                  receiveShadow
                  position={[0, -25.32, 2.97]}
                />
              </group>
            </group>
          </motion.group>
          <group name="LockScreen" position={[-1.12, 11.4, 43]} rotation={[0, 0, 0]} scale={[1.02, 1, 0.76]}>
            <group name="LcTxts" position={[1, 125.48, -28.67]}>
              <motion.mesh
                name="LockScreenDate"
                geometry={nodes.LockScreenDate.geometry}
                material={materials['LockScreenDate Material']}
                position={[0, 36.22, 1.19]}
                animate={dateObjRef}
                variants={timeAnimate}
              />
              <motion.mesh
                animate={timeObjRef}
                variants={timeAnimate}
                name="LockScreenTime"
                geometry={nodes.LockScreenTime.geometry}
                material={materials['LockScreenTime Material']}
                position={[1.49, -1.82, 0]}
                rotation={[0.02, 0, 0]}
              />
            </group>
            <motion.group
            variants={phoneAnimate}
            animate={ALSvisibAnim} 
            initial="hidden"
            name="notification" position={[0.61, 33.8, -23]}>
              <group name="Components" position={[0, 53, -2]}>
                <mesh
                  name="NotiDetails"
                  geometry={nodes.NotiDetails.geometry}
                  material={materials['NotiDetails Material']}
                  position={[-0.01, -8, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="NotiName"
                  geometry={nodes.NotiName.geometry}
                  material={materials['NotiName Material']}
                  position={[-66.56, 16.51, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="buttonTXT"
                  geometry={nodes.buttonTXT.geometry}
                  material={materials['buttonTXT Material']}
                  position={[-69.08, -20.43, 0.06]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="button"
                  geometry={nodes.button.geometry}
                  material={materials['button Material']}
                  position={[-69.08, -20.43, -1]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="baseNIco"
                  geometry={nodes.baseNIco.geometry}
                  material={materials['baseNIco Material']}
                  position={[-93.5, 16.7, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="fbNIco"
                  geometry={nodes.fbNIco.geometry}
                  material={materials['fbNIco Material']}
                  position={[-75.28, 16.7, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="gmailNIco"
                  geometry={nodes.gmailNIco.geometry}
                  material={materials['gmailNIco Material']}
                  position={[-57.07, 16.7, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="ldinNIco"
                  geometry={nodes.ldinNIco.geometry}
                  material={materials['ldinNIco Material']}
                  position={[-38.85, 16.7, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="mailNIco"
                  geometry={nodes.mailNIco.geometry}
                  material={materials['mailNIco Material']}
                  position={[-20.64, 16.7, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="outlookNIco"
                  geometry={nodes.outlookNIco.geometry}
                  material={materials['outlookNIco Material']}
                  position={[-2.42, 16.7, 0.58]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
                <mesh
                  name="notification1"
                  geometry={nodes.notification1.geometry}
                  material={materials['notification1 Material']}
                  position={[0, 0, -2.06]}
                  rotation={[0, 0, 0]}
                  scale={[0.98, 1, 1.32]}
                />
              </group>
              <mesh
                name="lsBgBlured"
                geometry={nodes.lsBgBlured.geometry}
                material={materials['lsBgBlured Material']}
                position={[-0.61, -33.8, -7.92]}
                rotation={[0, 0, 0]}
                scale={[0.98, 0.98, 0.96]}
              />
            </motion.group>
            <motion.group
            variants={phoneAnimate}
            animate={DefLSvisibAnim} name="LockScreenScreen" position={[0, -0.5, -28]}>
              <mesh
                name="lsFg"
                geometry={nodes.lsFg.geometry}
                material={materials['lsFg Material']}
                position={[0, -0.5, -1.4]}
                rotation={[0, 0, 0]}
                scale={[0.98, 0.98, 0.96]}
              />
              <mesh
                name="lsBgSolid"
                geometry={nodes.lsBgSolid.geometry}
                material={materials['lsBgSolid Material']}
                position={[0, 0.5, -1]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
              />
            </motion.group>
          </group>
        </motion.group>
        <hemisphereLight name="Default Ambient Light" intensity={-1.51} color="#dbdbdb" />
      </group>
    </>
    </Canvas>
      </Suspense>
      {/* ---------From Here HTML elements are written which are not part of Three.Js object group----- */}
      <motion2d.div
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
        <motion2d.div className="CloseBTAr" variants={BtnTxtAnim}
        initial='init'
        whileHover='click'>
          <span className="CloseBTArTxt">Close</span>
          {/* <svg
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
          </svg> */}
        </motion2d.div>
      </motion2d.div>
    </motion2d.div>
  )
}
