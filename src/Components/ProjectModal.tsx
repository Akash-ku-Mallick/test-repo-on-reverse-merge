import React from 'react';
import '../pages/App.css';
import '../styles/ComponentsStyle.css';
import '../styles/buttonStyles.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CodeOffRoundedIcon from '@mui/icons-material/CodeOffRounded';
import { Link } from 'react-router-dom';
import { Carousel } from '@trendyol-js/react-carousel';

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
      screenshots: [
      'https://www.online-tech-tips.com/wp-content/uploads/2019/11/scrolling-screenshot-android-longshot-start-now-576x1024.png'
      , 
      'https://www.online-tech-tips.com/wp-content/uploads/2019/11/scrolling-screenshot-android-longshot-start-now-576x1024.png'
      , 
      'https://www.online-tech-tips.com/wp-content/uploads/2019/11/scrolling-screenshot-android-longshot-start-now-576x1024.png'
      , 
      'https://www.online-tech-tips.com/wp-content/uploads/2019/11/scrolling-screenshot-android-longshot-start-now-576x1024.png'
    ],
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
      screenshots: [
      'https://storage.googleapis.com/support-forums-api/attachment/thread-13547257-3154341702855720459.png',
      'https://storage.googleapis.com/support-forums-api/attachment/thread-13547257-3154341702855720459.png',
      'https://storage.googleapis.com/support-forums-api/attachment/thread-13547257-3154341702855720459.png',
      'https://storage.googleapis.com/support-forums-api/attachment/thread-13547257-3154341702855720459.png'],
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
      screenshots: ['https://www.guidingtech.com/wp-content/uploads/android-11-how-to-take-a-screenshot-3_935adec67b324b146ff212ec4c69054f.png',
      'https://www.guidingtech.com/wp-content/uploads/android-11-how-to-take-a-screenshot-3_935adec67b324b146ff212ec4c69054f.png',
      'https://www.guidingtech.com/wp-content/uploads/android-11-how-to-take-a-screenshot-3_935adec67b324b146ff212ec4c69054f.png',
      'https://www.guidingtech.com/wp-content/uploads/android-11-how-to-take-a-screenshot-3_935adec67b324b146ff212ec4c69054f.png'],
    },
  ];

interface Props {
    visibility: boolean;
    setVisibility: (visibility: boolean) => void;
    id: number;
}

const ProjectModal: React.FC<Props> = (props) => {

    if (!props.visibility) return null;

    const id = props.id;

    const SelectedData = data.filter((item) => item.id === id)[0];

    const icon = SelectedData.icon;
    const title = SelectedData.title;
    const description = SelectedData.description;
    const techstacksused = SelectedData.techstacksused;
    const viewcode = SelectedData.viewcode;
    const screenshots = SelectedData.screenshots;
    const summary = SelectedData.summary;


    

    return (
      <div className="modal">
        <div className="Hw100 TopCurve bgDark">
          <div className="H100Header">
            <div className="H100HeaderIcon">
              <img src={icon} alt={title} />
            </div>
            <div className='Hw100HeaderText'>
              <h2 className="H100HeaderTitle">{title}</h2>
              <p className="H100HeaderDescription">{description}</p>
            </div>
            <Link to={viewcode} className="H100HeaderButton bn5">
              <CodeOffRoundedIcon />
              <p>View Code</p>
            </Link>
            <div className="H100HeaderClose">
              <button onClick={() => props.setVisibility(false)}>
                <CloseRoundedIcon />
              </button>
            </div>
          </div>
          <div className="H100BodyContainer">
          <div className="H100Body">
            <Carousel
              className="H100BodyCarousel"
              show={3}
              slide={1}
              swiping={true}
              responsive={true}
              useArrowKeys={false}
              infinite={true}
            >
              {screenshots.map((item: string) => {
                return (
                    <img src={item} alt={item} className="H100BodyCarouselItem" />
                );
              })}
            </Carousel>

            <div className="H100BodyTechStacks">
              {techstacksused.map((item: string) => {
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
            <div className="H100BodySummary">
              <p>{summary}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default ProjectModal;
