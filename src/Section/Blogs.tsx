import React, { useEffect, useState } from 'react';
import '../styles/blogs.css'

import { getCertificateList } from '../utils/Apis'

export default function Blogs() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Certificates, setCertificates] = useState<any[]>([]);
  const [loadingC, setLoadingC] = useState(true);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<string>("");
  

  useEffect(() => {
    getCertificateList().then((res) => {
      setCertificates(res);
      setLoadingC(false);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if (Certificates.length > 0) {
      console.log(Certificates);
      
    }
  }, [Certificates])

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
    <section id='Blogs' className='panel'>
      <div className='Half_Section'>
        <div className='Grid_container'>
          {loading ? <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></> : null}
        </div>
        <div className='Link_TXT'>
          <p>Read more </p>
        </div>
      </div>
      <div className='Half_Section'>
        <div className='Grid_container'>
          {
            loadingC ? <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>
            : Certificates.map((item, index) => {
              if (index < 6) {
                return (
                  <div key={index} onClick={(e)=>{handleClick(e, item.image)}} >
                    <img loading="lazy" src={item.image} alt={item.image} />
                  </div>
                )
              }
            })
          }
        </div>
        <div className='Link_TXT'>
          <p>{" "} </p>
        </div>
      </div>
      {modal ? <Modal /> : null}
    </section>
  )
}

const Skeleton = () => {return(<div className='Skeleton' />)}

