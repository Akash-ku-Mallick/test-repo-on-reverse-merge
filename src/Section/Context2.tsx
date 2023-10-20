
import '../pages/App.css';
import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import useSpline from '@splinetool/r3f-spline';
import { motion as motion3d }  from 'framer-motion-3d';
import { VictoryPie, VictoryLabel } from 'victory';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const technologies = [
  {
    id: 1,
    code: "React",
    fullName: "React",
    description:
      "A JavaScript library for building user interfaces, commonly used for building web applications.",
    in_my_project: "I use this library to build user interfaces for both websites and web applications",
    percentage: 80,
  },
  {
    id: 2,
    code: "Typescript",
    fullName: "TypeScript",
    description:
      "A statically typed superset of JavaScript, often used for building large-scale applications.",
    in_my_project: "This website is designed using TypeScript.",
    percentage: 85,
  },
  {
    id: 3,
    code: "JS",
    fullName: "JavaScript",
    description:
      "A versatile scripting language used for creating interactive and dynamic web content.",
    in_my_project: "Zen-Gym Project is build using JavaScript completely.",
    percentage: 75,
  },
  {
    id: 4,
    code: "html",
    fullName: "HTML",
    description:
      "Hypertext Markup Language, the standard language for creating web pages and web applications.",
    in_my_project: "I use it to create pages or to create jsx elements",
    percentage: 59,
  },
  {
    id: 5,
    code: "CSS",
    fullName: "CSS",
    description:
      "Cascading Style Sheets used to style and format web pages.",
    in_my_project: "In all my web applications and react native applications I used it for styling.",
    percentage: 55,
  },
  {
    id: 6,
    code: "Three",
    fullName: "Three.js",
    description:
      "A 3D graphics library for creating 3D visualizations and games on the web.",
    in_my_project: "I use it with spline to create 3D visualizations for the web project",
    percentage: 35,
  },
  {
    id: 7,
    code: "git",
    fullName: "Git",
    description:
      "A distributed version control system used for tracking changes in source code during software development.",
    in_my_project: "I use the git cli to manage changes in source code during software development",
    percentage: 30,
  },
  {
    id: 8,
    code: "Figma",
    fullName: "Figma",
    description:
      "A cloud-based design tool used for creating user interfaces and collaborative design work.",
    in_my_project: "I use this to create UI prototypes",
    percentage: 25,
  },
  {
    id: 9,
    code: "GitHub",
    fullName: "GitHub",
    description:
      "A web-based platform for version control and collaboration, widely used for hosting and sharing code.",
    in_my_project: "I use it to manage project repositories and also to host website",
    percentage: 80,
  },
  {
    id: 10,
    code: "Cpp",
    fullName: "C++",
    description:
      "An extension of the C programming language commonly used for system programming and game development.",
    in_my_project: "In my project X, I used it",
    percentage: 85,
  },
  {
    id: 11,
    code: "c",
    fullName: "C",
    description:
      "A versatile programming language known for its efficiency, often used for system programming and embedded systems.",
    in_my_project: "I use it learn basic programming concepts and logical program solving algorithms",
    percentage: 10,
  },
  {
    id: 12,
    code: "Firebase",
    fullName: "Firebase",
    description:
      "A mobile and web application development platform that provides various backend services and tools.",
    in_my_project: "I use it in every projects to integrate cloud services of firebase to set backend services.",
    percentage: 30,
  },
  {
    id: 13,
    code: "Java",
    fullName: "Java",
    description:
      "A widely used programming language known for its portability and used in various applications, including Android app development.",
    in_my_project: "I used it basic programming with GUI based desktop applications", 
    percentage: 30,
  },
  {
    id: 14,
    code: "python",
    fullName: "Python",
    description:
      "A high-level programming language known for its simplicity and readability, used in web development, data science, and more.",
    in_my_project: "I use it to create a simple functional program to test project ideas.",
    percentage: 10,
  },
];

const RingChart = ( percentage: any ) => {

  const offset = 100 - percentage.percentage;

  const data = [
    { x: 1, y: percentage.percentage, color: "rgb(100, 225, 225)" },
    { x: 2, y: offset, color: "rgb(224, 224, 224)" },
  ];

  return (
    <div className="percent">
        <svg viewBox="0 0 200 200" width={200} height={200}>
        <VictoryPie
            width={200} height={200}
            animate={{ duration: 500 }}
            standalone={false}
            data={data}
            innerRadius={35}
            cornerRadius={0}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                return datum.color ;
              }
              }
            }}
          />
          <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={100} y={100}
                  text={`${percentage.percentage}%`}
                  style={{ fontSize: 22, fill: "rgb(100, 225, 225)", fontWeight: 70 }}
                />
        </svg>
    </div>
  );
};

export default function Context2(props: any){

    const { nodes, materials } = useSpline('https://prod.spline.design/eqB7rgLL1IBZPM7S/scene.splinecode')
    const ref = useRef(null);
    const [popup, setPopup] = useState(false); 
    const [techCode, setTechCode] = useState(null);

    useEffect(() => {
      console.log(techCode);
      
      return () => {
        setPopup(true);
      }
    }, [techCode])
    
   
  const PopupUI = ( ) => {
    if (!popup) return null;

    if (techCode !== null) {

      let title = 'Popup';
      let desc = 'Popup for the specified technology code and description for the specified technology code';
      let desc2 = "Popup for the specified technology code and description for the specified technology code and description for the specified technology code ";
      let value = 0;
      
      technologies.forEach((tech)=>{
        if (tech.code === techCode) {
          title = tech.fullName;
          desc = tech.description;
          desc2 = tech.in_my_project;
          value = tech.percentage;
        }
      })

      return (
        <div className="popup">
          <div className="popup-container">
            <div className='popupHeader'>
              <h2>{title}</h2>
              <button
                className="button"
                onClick={() => {
                  setPopup(false);
                }}
              >
                <CloseRoundedIcon   />
              </button>
            </div>
            <div className="scrollables">
              <p>{desc}</p>
            </div>
            <div className="popup_footer">
              <div className="leftChild">
                {desc2}
              </div>
              <div className="rightChild">
                <RingChart percentage={value} />
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;

  }


    const OnClickHandler = (e: any) => {
      setTechCode(e.eventObject.name);
    }

  
  
    return (
      <section id="Context2" className="Skills panel">

        <span style={{ color: "white", textAlign: "center", zIndex: 10 }}>
          T E C H S T A C K T H A T I W O R K E D O N
        </span>
        <PopupUI />
        <Suspense fallback={null}>
          <Canvas id="TecchCanvas" ref={ref} shadows flat linear>
            <OrthographicCamera 
            name="Camera"
            makeDefault={true}
            zoom={0.7}
            far={100000}
            near={-100000}
            position={[0, 0, 1000.05]}
            rotation={[0, 0, 0]}
            scale={1} />
            <ambientLight intensity={0.5} />
            <motion3d.group name="Enviroment" position={[160.29, 682.97, 1256.27]}>
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
            </motion3d.group>
            <motion3d.group name="TEchIcons" position={[0, 0, 0]}>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="Firebase"
                position={[0, -props.props[1] / 2 + 50, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="Firebase1"
                  geometry={nodes.Firebase1.geometry}
                  material={materials["fireb mat"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Firebase2"
                  geometry={nodes.Firebase2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="Three"
                position={[-props.props[0] / 2 + 50, 0, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="Three1"
                  geometry={nodes.Three1.geometry}
                  material={materials["Three1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Three2"
                  geometry={nodes.Three2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="GitHub"
                position={[props.props[0] / 2 - 50, 0, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
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
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="Java"
                position={[props.props[0] / 4, -props.props[1] / 2 + 50, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="Java1"
                  geometry={nodes.Java1.geometry}
                  material={materials["Java1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Java2"
                  geometry={nodes.Java2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="Cpp"
                position={[
                  -props.props[0] / 2 + 50,
                  -props.props[1] / 2 + 50,
                  0,
                ]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="Cpp1"
                  geometry={nodes.Cpp1.geometry}
                  material={materials["Cpp1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Cpp2"
                  geometry={nodes.Cpp2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="c"
                position={[
                  -props.props[0] / 4 + 25,
                  -props.props[1] / 2 + 50,
                  0,
                ]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="c1"
                  geometry={nodes.c1.geometry}
                  material={materials["c1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="c2"
                  geometry={nodes.c2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="React"
                position={[
                  -props.props[0] / 2 + 50,
                  props.props[1] / 2 - 50,
                  0,
                ]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="React1"
                  geometry={nodes.React1.geometry}
                  material={materials["React1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="React2"
                  geometry={nodes.React2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="python"
                position={[
                  props.props[0] / 2 - 50,
                  -props.props[1] / 2 + 50,
                  0,
                ]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="python1"
                  geometry={nodes.python1.geometry}
                  material={materials["python1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="python2"
                  geometry={nodes.python2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="git"
                position={[-props.props[1] / 4 + 25, 0, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="git1"
                  geometry={nodes.git1.geometry}
                  material={materials["git1 Material"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="git2"
                  geometry={nodes.git2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="Typescript"
                position={[-props.props[0] / 4, props.props[1] / 2 - 50, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="Typescript1"
                  geometry={nodes.Typescript1.geometry}
                  material={materials["ts mat"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="Typescript2"
                  geometry={nodes.Typescript2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="JS"
                position={[0, props.props[1] / 2 - 50, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="JS1"
                  geometry={nodes.JS1.geometry}
                  material={materials["js mat"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="JS2"
                  geometry={nodes.JS2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="CSS"
                position={[props.props[0] / 2 - 50, props.props[1] / 2 - 50, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="CSS1"
                  geometry={nodes.CSS1.geometry}
                  material={materials.css}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="CSS2"
                  geometry={nodes.CSS2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="html"
                position={[props.props[0] / 4 - 25, props.props[1] / 2 - 50, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
                <mesh
                  name="html1"
                  geometry={nodes.html1.geometry}
                  material={materials["html m"]}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.5]}
                />
                <mesh
                  name="html2"
                  geometry={nodes.html2.geometry}
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
              <motion3d.group
              whileHover={{scale: 2.4}}
              onClick={(e)=>{OnClickHandler(e)}}
              
                name="Figma"
                position={[props.props[1] / 4 - 25, 0, 0]}
                scale={[1.93, 1.88, 1.3]}
              >
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
                  material={materials[""]}
                  position={[0, -25.32, -1.03]}
                />
              </motion3d.group>
            </motion3d.group>
          </Canvas>
        </Suspense>
        <div></div>
      </section>
    );
  }
  