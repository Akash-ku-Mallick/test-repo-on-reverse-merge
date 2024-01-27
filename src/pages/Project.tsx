import React, { useEffect, useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CodeOffRoundedIcon from '@mui/icons-material/CodeOffRounded';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import { Carousel } from '@trendyol-js/react-carousel';
import { Link, useParams, useNavigate } from 'react-router-dom'

import { db, FREBASE_APP } from '../Configs/FirebaseConfig';

import '../pages/App.css';
import '../styles/ComponentsStyle.css';
import '../styles/buttonStyles.css';

function Project() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [SelectedData, setSelectedData] = useState(data[0]);

  const[iconUrl, setIconUrl] = useState<string>("");
  const[imagesUrl, setImagesUrl] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(true);


  const dataRef = collection(db, "projects");
  const navigate = useNavigate();
  const storage = getStorage(FREBASE_APP, "gs://akash-my-portfolio.appspot.com");

  const getIconUrl = async () => {
    const url = await getDownloadURL(ref(storage, SelectedData.icon));
    setIconUrl(url);
  };

    
  const GetCoevrURL = async () => {
      const storageRef = ref(storage, SelectedData.image);
      let x = imagesUrl;
      getDownloadURL(storageRef)
      .then((url) => {
        x.push(url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        x.push("https://firebasestorage.googleapis.com/v0/b/akash-my-portfolio.appspot.com/o/projects_data%2Fprj1%2Fimg.jpg?alt=media&token=56377c5e-7762-4668-9d62-60a1b3e65312");
      });
      setImagesUrl(x);
    };
  
  const getSsUris = async () => {
    SelectedData.screenshots.map((item: string) => {
      const storageRef = ref(storage, item);
      let x = imagesUrl;
      getDownloadURL(storageRef)
      .then((url) => {
        x.push(url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        x.push("https://firebasestorage.googleapis.com/v0/b/akash-my-portfolio.appspot.com/o/projects_data%2Fprj1%2Fimg.jpg?alt=media&token=56377c5e-7762-4668-9d62-60a1b3e65312");
      });
      setImagesUrl(x);
    });

  }

  const getData = async () => {
    const data = await getDocs(dataRef);
    setData(data.docs.map((doc) => doc.data()));
  };

  const SelectData = () => {
    if (id === undefined) {
      setIsLoading(true);
    }
    else {
      if (parseInt(id) <= data.length && parseInt(id) > 0) {
        setSelectedData(data.filter((item) => item.id === parseInt(id))[0]);
        setIsLoading(false);
      }
      else {
        setIsLoading(true);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    SelectData();
  }, [id, data]);

  useEffect(() => {
    if(SelectedData !== undefined){
      getIconUrl();
      setLoading(false);
      GetCoevrURL();
    }
    else
    {
      setIsLoading(true);
    }
  }, [SelectedData]);

  useEffect(() => {
    if(SelectedData !== undefined)
    {
    if(SelectedData.screenshots !== undefined)
      {
        getSsUris();
        setLoading(false);
      }
      else
      {
        setIsLoading(true);
      }
    }
  } , [SelectedData]);

    
        return (
            <>
          {isLoading&&loading?
            <div className="loading">
                <div className="loading-text">
                <h1>Loading...</h1>
                <p>It will take a few seconds.</p>
                </div>
            </div>
          :<div className="modal">
            <div className="Hw100">
              <div className="H100Header">
                <div className='FlexRow'>
                <div className="H100HeaderIcon">
                  <img src={iconUrl} alt={iconUrl} />
                </div>
                <div className='Hw100HeaderText'>
                  <h2 className="H100HeaderTitle">{SelectedData.title}</h2>
                  <p className="H100HeaderDescription">{SelectedData.description}</p>
                </div>
                <Link to={SelectedData.viewcode} className="H100HeaderButton bn5">
                  <CodeOffRoundedIcon />
                  <p>View Code</p>
                </Link>
                </div>
                <div className="H100HeaderClose">
                  <button onClick={() => navigate("/Akash-Kumar/")}>
                    <CloseRoundedIcon />
                  </button>
                </div>
              </div>
              <div className="H100BodyContainer">
              <div className="H100Body">
                {loading?
                <div className="H100BodyCarousel">
                  <h2>
                    Loading...
                  </h2>
                </div>
                :<Carousel
                  className="H100BodyCarousel"
                  show={3}
                  slide={1}
                  swiping={true}
                  responsive={true}
                  infinite={true}
                  leftArrow={<div />}
                  rightArrow={<div />}
                >
                  {imagesUrl.map((item: string) => {
                    return (
                        <img src={item} alt={item} className="H100BodyCarouselItem" />
                    );
                  })}
                </Carousel>}
                <h3>Tech Involved : </h3>
                <div className="H100BodyTechStacks">
                  
                  {SelectedData.techstacksused.map((item: string) => {
                    return (
                      <div
                        style={{
                          borderColor: "white",
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
                  <p>{SelectedData.summary}</p>
                </div>
              </div>
              </div>
            </div>
          </div>}
          </>
        );
    };


export default Project


