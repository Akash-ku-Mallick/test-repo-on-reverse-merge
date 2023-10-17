import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const data = [
  {
    id: 1,
    title: 'Hourly-Homes',
    description: 'am building an Android application using React Native that allows users to book rooms for a minimum of 1 hour and charges on an hourly basis.',
    image: 'https://unsplash.com/photos/ihIKOg_lHgI/download?force=true&w=1920',
    techstacksused: ['React' , 'React Native', 'Expo' ,'RNUI', 'Firebase'],
    viewcode: 'https://github.com/Akash-ku-Mallick/Hourly-Homes',
  },
  {
    id: 2,
    title: 'Task Tracker',
    description: 'It is an under developed project in which I am building a task scheduler that is targeted to increase productivity of user by following',
    image: 'https://images.unsplash.com/photo-1693237476029-f8469bb756a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    techstacksused: ['React' , 'React Native', 'RNUI', 'Firebase'],
    viewcode: 'https://github.com/Akash-ku-Mallick/TaskTracker',
  },
  {
    id: 3,
    title: 'Zen-Gym',
    description: "I m building an all in one platform to maintain a subscription, diet plan, equipment management and members management for various groups of users of a gym, using React.js, MUI, and Firebase as back-end. The app version is building with React-native.",
    image: 'https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    techstacksused: ['React' , 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Firebase', 'ReactRouter'],
    viewcode: 'https://github.com/Akash-ku-Mallick/ZenGym',
  },

]



export function Context1() {

  


    return (
      <section id='Context' className='Context panel'>
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
              />
            );
          })}
        </Carousel>
        </div>
      </section>
    );
  }

  const ItemTemplate = ( info : {title: string,
     description: string, 
     link: string, 
     image: string,
     tech: any,
     id: number} ) => {


    const OnClickFunc = (e: any) => {
      console.log(e.target);
    }

    return (
      <div style={{marginInline: '10%'}}>
        <div >
          <div>
            <h2 style={{ color: "white" }}>{info.title}</h2>
            <p style={{ color: "white" }}>{info.description}</p>
          </div>
          <a style={{color: 'rgba(180, 190, 190, 1)', fontSize: 10}} href={info.link} title="View Code">
            View Code
          </a>
        </div>
        <div>
            <img
              src={info.image}
              alt={info.image}
              style={{ height: "90%", width: "90%" }}
            />
        </div>
        <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingInline: '2%'}}>
          <div className="techstacksused">
            {info.tech.map((item: any) => {
              return (
                <div
                  style={{
                    borderColor: "white",
                    borderWidth: "4px",
                    paddingInline: "2px",
                  }}
                >
                  <span style={{ color: "white" }} key={item}>
                    {" "}
                    {item}{" "}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            className="btn"
            onClick={(e) => {
              OnClickFunc(e);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    );
  }
  

  