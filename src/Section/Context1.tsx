import React, { useState, useEffect } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProjectModal from '../Components/ProjectModal';
import '../styles/projectStyles.css'
import '../styles/buttonStyles.css'

const data = [
  {
    id: 1,
    type: 'android app',  
    catagory: 'hotel booking',
    title: 'Hourly-Homes',
    status: 'under development',
    description: 'I am building an Android application using React Native that allows users to book rooms for a minimum of 1 hour and charges on an hourly basis.',
    image: 'https://unsplash.com/photos/ihIKOg_lHgI/download?force=true&w=1920',
    techstacksused: ['React', 'React Native', 'Expo', 'RNUI', 'Firebase'],
    viewcode: 'https://github.com/Akash-ku-Mallick/Hourly-Homes',
    summary: 'Akash Kumar Mallick is the developer of this project. I am building an Android application using React Native that allows users to book rooms for a minimum of 1 hour and charges on an hourly basis.',
    icon: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
    screenshots: ['', '', '', ''],
  },
  {
    id: 2,
    type: 'android app',
    catagory: 'productivity',
    title: 'Task Tracker',
    status: 'under development',
    description: 'It is an underdeveloped project in which I am building a task scheduler that is targeted to increase productivity of the user by following',
    image: 'https://images.unsplash.com/photo-1693237476029-f8469bb756a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    techstacksused: ['React', 'React Native', 'RNUI', 'Firebase'],
    viewcode: 'https://github.com/Akash-ku-Mallick/TaskTracker',
    summary: 'Akash Kumar Mallick is the developer of this project. It is an underdeveloped project in which I am building a task scheduler that is targeted to increase productivity of the user by following',
    icon: 'https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png',
    screenshots: ['', '', '', ''],
  },
  {
    id: 3,
    type: 'web app',
    catagory: 'gym management',
    title: 'Zen-Gym',
    status: 'under development',
    description: "I am building an all-in-one platform to maintain a subscription, diet plan, equipment management, and members management for various groups of users of a gym, using React.js, MUI, and Firebase as a back-end. The app version is building with React-native.",
    image: 'https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    techstacksused: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Firebase', 'ReactRouter'],
    viewcode: 'https://github.com/Akash-ku-Mallick/ZenGym',
    summary: 'Akash Kumar Mallick is the developer of this project. I am building an all-in-one platform to maintain a subscription, diet plan, equipment management, and members management for various groups of users of a gym, using React.js, MUI, and Firebase as a back-end. The app version is building with React-native.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
    screenshots: ['', '', '', ''],
  },
  {
    id: 4,
    type: 'Web',
    catagory: 'portfolio',
    title: 'Portfolio',
    status: 'under development',
    description: 'I am building a portfolio website for myself using React.js, Material UI, and Firebase as a back-end.',
    image: 'https://images.unsplash.com/photo-1521737711867-8f4b155b1e0b?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    techstacksused: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Firebase', 'ReactRouter'],
    viewcode: 'https://github.com/Akash-ku-Mallick/ZenGym',
    summary: 'Akash Kumar Mallick is the developer of this project. I am building an all-in-one platform to maintain a subscription, diet plan, equipment management, and members management for various groups of users of a gym, using React.js, MUI, and Firebase as a back-end. The app version is building with React-native.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
    screenshots: ['', '', '', ''],
  },
  {
    id: 5,
    type: 'Web',
    catagory: 'e-commerce',
    title: 'PurupruJunction',
    status: 'under development',
    description: 'I am building a portfolio website for myself using React.js, Material UI, and Firebase as a back-end.',
    image: 'https://images.unsplash.com/photo-1521737711867-8f4b155b1e0b?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    techstacksused: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Firebase', 'ReactRouter'],
    viewcode: 'https://github.com/Akash-ku-Mallick/ZenGym',
    summary: 'Akash Kumar Mallick is the developer of this project. I am building an all-in-one platform to maintain a subscription, diet plan, equipment management, and members management for various groups of users of a gym, using React.js, MUI, and Firebase as a back-end. The app version is building with React-native.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
    screenshots: ['', '', '', ''],
  }
];


interface Info  {
  key: number,
  title: string,
  description: string, 
  link: string, 
  image: string,
  tech: any,
  id: number,
  type: string,
  catagory: string,
  status: string,
  images: string[],
  visibility: boolean,
  setVisibility: (visibility: boolean) => void,
  setId: (id: number) => void,
}

interface PrjTooltipProps {
  visibility: boolean,
  setVisibility: (visibility: boolean) => void,
  id: number,
  data: any,
}


const LeftArrow = () => {
  return (
    <div className='Arrow' style={{paddingLeft: '2px'}}>
      <ArrowBackIosIcon htmlColor='white' />
    </div>
  );
}

const RightArrow = () => {
  return (
    <div className='Arrow'>
      <ArrowForwardIosIcon htmlColor='white' />
    </div>
  );
}

export function Context1() {
  const [visibility, setVisibility] = useState(false);
  const [id , setId] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [ifDesktop, setIfDesktop] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  useEffect(() => {
    setIfDesktop(windowSize[0] > windowSize[1]);
  }, [windowSize]);

  


    return (
      <section id='Context' className='panel'>
        <div className='Context'>
          <TopProjects />
          <BottomSection />
        </div>
          
        {/* <div className='carosol_Wrapper'>
        <Carousel className='carousel' show={ifDesktop ? 2 : 1} slide={1} swiping={true}
        
        leftArrow={<LeftArrow/>}
        rightArrow={<RightArrow />}
        responsive={true}>
          {data.map((item) => {
            return (
              <ItemTemplate
                key={item.id}
                title={item.title}
                description={item.description}
                link={item.viewcode}
                image={item.image}
                tech={item.techstacksused}
                id={item.id}
                visibility={visibility}
                setVisibility={setVisibility}
                setId={setId}
              />
            );
          })}
        </Carousel>
        </div> */}
      </section>
    );
  }

  const ItemTemplate: React.FC<Info> = ( info ) => {

    

    const OnClickFunc = (e: any) => {
      info.setId(info.id);
      info.setVisibility(true);
    }

    return (
      <div className='ItemContainer' >
        
        <div className='ItemImage'>
            <img
              src={info.image}
              alt={info.image}
            />
        </div>
        <div className='ItemHeader'>
          <h2 style={{ color: "white" }}>{info.title}</h2>
        </div>
        {/* <div className='ItemBottomBar'>
          <div className="bn40div" style={{height: '100%', maxWidth: '40%'}}>
            <a href={info.link} className='bn40' title="View Code">View Code</a>
          </div>
          <button className='button-36' style={{maxWidth: '40%'}}
            onClick={(e) => {
              OnClickFunc(e);
            }}>
            Read More
          </button>
        </div> */}
      </div>
    );
  }
  
const TopProjects: React.FC = () => {
  return (
    <div className='TopProjects'>
      <h1 className='ContextTitle'>Projects</h1>
      <div className='carosol_Wrapper'>
        <Carousel className='carousel' show={2} slide={1} swiping={true}
        
        leftArrow={<LeftArrow/>}
        autoSwipe={300}
        rightArrow={<RightArrow />}
        responsive={true}>
          {data.map((item) => {
            return (
              <ItemTemplate
                key={item.id}
                title={item.title}
                description={item.description}
                link={item.viewcode}
                image={item.image}
                tech={item.techstacksused}
                id={item.id}
                visibility={false}
                setVisibility={() => {}}
                setId={() => {}}
                type = 'string'
                catagory= 'string'
                status= 'string'
                images= {['', '', '', '']}
              />
            );
          })}
        </Carousel>
        </div>
    </div>
  );
}
  

const BottomSection: React.FC = () => {
  return (
    <div className='BottomSection'>
      <div className='catagorised'>
        <span>Apps</span>
        <a>Hourly Home</a>
        <a>Task Tracker</a>
        <a>CAlculator</a>
        <a>Unlimit</a>
      </div>
      <div className='vr' />
      <div>
        <span>websites</span>
      </div>
      <div className='vr' />
      <div>
        <span>Games</span>
      </div>
      <div className='vr' />
      <div>
        <span>Others</span>
      </div>
    </div>
  );
}

const ProjectToolTip = () => {
  return (
    <div className='ProjectToolTip'>
      
    </div>
  );
}