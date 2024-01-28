import React, { useState, useEffect } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { collection, getDocs } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../styles/projectStyles.css'
import '../styles/buttonStyles.css'


import { db, FREBASE_APP } from '../Configs/FirebaseConfig';
import { motion } from 'framer-motion';

const storage = getStorage(FREBASE_APP, "gs://akash-my-portfolio.appspot.com");

interface Info  {
  key: number,
  title: string, 
  image: string,
  id: number,
}

interface Props {
  dataCategory: number,
}

const LeftArrow = () => {
  return (
    <div className='Arrow' >
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
  const [Data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [ifDesktop, setIfDesktop] = useState<boolean>(true);

  const dataRef = collection(db, "projects");

    
  const GetImageURI = async (image: string) => {
    const storageRef = ref(storage, image);
    const url = new Promise<string>((resolve, reject) => {
      getDownloadURL(storageRef)
        .then((url) => {
          resolve(url);
        })
        .catch((error) => {
          resolve("https://firebasestorage.googleapis.com/v0/b/akash-my-portfolio.appspot.com/o/projects_data%2Fprj1%2Fimg.jpg?alt=media&token=56377c5e-7762-4668-9d62-60a1b3e65312");
        });});
    return url;
  }

  useEffect(() => {
    const getData = async () => {
      
      let arr: any[] = [];
      const docsSnap = await getDocs(dataRef);
      docsSnap.forEach(async (doc) => {
        let temp = doc.data();
        temp.image = await GetImageURI(temp.image);
        arr.push(temp);
      });
      setData(arr);
      setLoading(false);
    }
    getData();
  }, [])


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

  
  const TopProjects: React.FC = () => {
    return (
      <div className='TopProjects'>
        <h1 className='TopProjectsTitle'>Projects</h1>
        {
          loading ? <h1>Loading...</h1> :
          <div className='carosol_Wrapper'>
          <Carousel show={ifDesktop?3:1} slide={1} swiping={true}
          leftArrow={<LeftArrow/>}
          autoSwipe={8000}
          rightArrow={<RightArrow />}
          responsive={true}>
          {Data.map((item) => {
                return (
                  <ItemTemplate
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    id={item.id}
                  />);
            })}
          </Carousel>
          </div>
        }
      </div>
    );
  }

  const BottomSection: React.FC = () => {

    const [loadingText, setLoading] = useState<boolean>(true);
    const [ResData, setResData] = useState<any[]>([]);


    const CatagorisedDataSet = () => {
      let arr1: any[] = [];
      let arr2: any[] = [];
      let arr3: any[] = [];

      Data.forEach((item) => {
        if (item.type === 1) {
          arr1.push(item);
        }
        else if (item.type === 2) {
          arr2.push(item);
        }
        else {
          arr3.push(item);
        }
      });
      
      setResData([arr1, arr2, arr3]);
    }

    useEffect(() => {
      setLoading(true);
      if(Data.length > 0){
        CatagorisedDataSet();
        setLoading(false);
      }
    }, []);

    const OutputFormated = (D: Props) => {
      let index = D.dataCategory;
      const nav = useNavigate();
      const OnClickFunc = (link: String) => {
        nav("/Akash-Kumar/my-projects/" + index);
      }
      return (
        <div className='BottomSection_body'>
        {
            ResData[index-1].map((item: any) => {

            return (
              <div className='content' onClick={()=>{OnClickFunc(item.viewcode)}}>
                <p>{item.title}</p>
              </div>
            )
          })
        }
        </div>
      )
    }


    return (
      <div className='BottomSection'>
        <motion.div
          className='child'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}>
          <div className='BottomSection_heading'>
            <p>Applications</p>
          </div>
          {
            loadingText ? <TextSkeleton /> :
            <OutputFormated dataCategory={1} />
          }
        </motion.div>
        <motion.div 
        className='child'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}>
          <div className='BottomSection_heading'>
            <p>Websites</p>
          </div>
          {
            loadingText ? <TextSkeleton /> :
            <OutputFormated dataCategory={2} />
          }
        </motion.div>
        <motion.div className='child'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}>
          <div className='BottomSection_heading'>
            <p>Other</p>
          </div>
          {
            loadingText ? <TextSkeleton /> :
            <OutputFormated dataCategory={3} />
          }
        </motion.div>
      </div>
    );
  }

  const ItemTemplate: React.FC<Info> = ( info ) => {
    const [loading, setLoading] = useState<boolean>(true);
    
    const navigate = useNavigate();

    const OnClickFunc = () => {
      navigate("/Akash-Kumar/my-projects/" + info.id);
    }

    return (
      <motion.div
       initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut"}}
        viewport={{ once: false }}
        exit={{ opacity: 0 }}
       onClick={OnClickFunc} className='ItemContainer' >
      
        {loading && <LoadingImgSkeleton />}
            
        <div className='ItemImage'>
            <img
              src={info.image}
              alt='not available'
              loading='lazy'
              onLoad={() => {
                setLoading(false);
              }}
            />
        </div>
        <div className='ItemHeader'>
          <h2 style={{ color: "white" }}>{info.title}</h2>
        </div>
      </motion.div>
    );
  }



    return (
      <section id='Context' className='panel'>
        <div className='Context'>
          <TopProjects />
          <BottomSection />
        </div>
      </section>
    );
  }



const LoadingImgSkeleton: React.FC = () => {
  return (
    <div className='LoadingImgSkeletonItemContainer'>
      <div className='ItemImage LoadingImgSkeleton'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="white"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg>
      </div>
      <div className='ItemHeader LoadingImgSkeletontxt'></div>
    </div>
  );
}

const TextSkeleton: React.FC = () => {
  return (
    <div className='BottomSection_body'>
      <div className='TextSkeleton'/><div className='TextSkeleton'/><div className='TextSkeleton'/>
      <div className='TextSkeleton'/><div className='TextSkeleton'/><div className='TextSkeleton'/>
    </div>)
}