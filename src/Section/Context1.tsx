import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProjectModal from '../Components/ProjectModal';
import '../styles/projectStyles.css'

const data = [
  {
    id: 1,
    title: 'Hourly-Homes',
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
    title: 'Task Tracker',
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
    title: 'Zen-Gym',
    description: "I am building an all-in-one platform to maintain a subscription, diet plan, equipment management, and members management for various groups of users of a gym, using React.js, MUI, and Firebase as a back-end. The app version is building with React-native.",
    image: 'https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    techstacksused: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Firebase', 'ReactRouter'],
    viewcode: 'https://github.com/Akash-ku-Mallick/ZenGym',
    summary: 'Akash Kumar Mallick is the developer of this project. I am building an all-in-one platform to maintain a subscription, diet plan, equipment management, and members management for various groups of users of a gym, using React.js, MUI, and Firebase as a back-end. The app version is building with React-native.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png',
    screenshots: ['', '', '', ''],
  },
];


interface Info  {
  key: number,
  title: string,
  description: string, 
  link: string, 
  image: string,
  tech: any,
  id: number,
  visibility: boolean,
  setVisibility: (visibility: boolean) => void,
  setId: (id: number) => void,
}


export function Context1() {
  const [visibility, setVisibility] = useState(false);
  const [id , setId] = useState(0);

  


    return (
      <section id='Context' className='Context panel'>
        <ProjectModal
          visibility={visibility}
          setVisibility={setVisibility}
          id={id}/>
        <div className='carosol_Wrapper'>
        <Carousel className='carousel' show={2} slide={1} swiping={true}
         
        leftArrow={<ArrowBackIosIcon htmlColor='white' sx={{marginInline: '20px', cursor: 'pointer'}} />}
        rightArrow={<ArrowForwardIosIcon htmlColor='white' sx={{marginBlock: '20px'}} />}
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
        </div>
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
        <div >
          <h2 style={{ color: "white" }}>{info.title}</h2>
          <p style={{ color: "white" }}>{info.description}</p>
        </div>
        <div className='ItemImage'>
            <img
              src={info.image}
              alt={info.image}
            />
        </div>
        <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingInline: '2%'}}>
          <a style={{color: 'rgba(180, 190, 190, 1)', fontSize: 10}} href={info.link} title="View Code">
            View Code
          </a>
          <button
            className="btn"
            onClick={(e) => {
              OnClickFunc(e);
            }}>
            Read More
          </button>
        </div>
      </div>
    );
  }
  

  