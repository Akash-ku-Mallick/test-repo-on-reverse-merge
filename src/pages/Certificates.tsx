import React, { useEffect, useState } from 'react';

import { getCertificateList } from '../utils/Apis';
import '../styles/blogs.css';
import { motion } from 'framer-motion';

interface Prop {
  item: any,
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: string) => void,
}

const Certificates = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<string>("");


  useEffect(() => {
    getCertificateList().then((res) => {
      console.log('certificates', typeof(res));
      setCertificates(res);
      setLoading(false);
    }).catch((err) => {
      console.log('error occured while fetching certificates', err);
    })
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: string) => {
    setSelected(index);
    setModal(true);
  };

  const Modal = () => {
    return (
      <div className='Modal' onClick={() => setModal(false)} >
        <div className='Close' onClick={() => setModal(false)}>X</div>
        <div className='Modal_img' >
          <img loading="lazy" src={selected} alt='Certificates' />
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='App' style={{minHeight: '100%'}}>
        <h1 className="title" style={{color: 'white'}}>Certificates</h1>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {loading ? <h1 style={{color: 'white'}} >Loading ...</h1>
            : certificates.map((item, index) => {
              return (<Content key={index} item={item} handleClick={handleClick}/>)
            })
          }
        </div>
      </div>
      
      {modal ? <Modal /> : null}
    </div>
  )
}

const Content = (certificate: Prop) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  console.log('certificate', certificate);
  
  
  return (
    <motion.div style={{height: 500, width: 700}}>
      {isLoading ? <Skeleton /> : null }
        <div onClick={(e)=>{certificate.handleClick(e, certificate.item.image)}}>
          <img src={certificate.item.image} alt="certificate" onLoad={() => setIsLoading(false)} />
          <h3 style={{color: 'white'}}>{certificate.item.name}</h3>
        </div>
    </motion.div>
  )
}


const Skeleton = () => {return(<div className='Skeleton' />)}

export default Certificates
