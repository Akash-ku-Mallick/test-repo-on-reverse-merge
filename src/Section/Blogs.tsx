import React, { useEffect, useState } from 'react';
import '../styles/blogs.css'

import { getCertificateList } from '../utils/Apis'
import getArticles from '../Configs/DevBlogsConfig';
import { useNavigate } from 'react-router-dom';

export default function Blogs() {

  const [blogs, setBlogs] = useState<any[]>([]);
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


  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: string) => {
    setSelected(index);
    setModal(true);
  };

  useEffect(() => {
    getArticles().then((res: unknown) => {setBlogs(res as any[]); setLoading(false);}).catch((err) => {setLoading(true);})
    
  }, [])
  
  const navigate = useNavigate();

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

  const FollowToBlogs = () => {
    window.open('https://dev.to/akashmallick', '_blank');
  }

  const FollowToCertificates = () => {
    navigate('/Akash-Kumar/certificates')
  }

  return (
    <section id='Blogs' className='panel'>
      <div className='Half_Section'>
        <div id='blog' className='Grid_container'>
          {loading ? <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></> 
          : blogs.map((item, index) => {
              return (<Blog_content key={index} data={item} />)
            }) 
          }
        </div>
        <div className='Link_TXT' onClick={FollowToBlogs}>
          <p>Read more </p>
        </div>
      </div>
      <div className='Half_Section'>
        <div className='Grid_container'>
          {loadingC ? <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>
            : Certificates.map((item, index) => {
              if (index < 6) {
                return (<Content key={index} item={item} handleClick={handleClick}/>)
              }
            })
          }
        </div>
        <div className='Link_TXT' onClick={FollowToCertificates}>
          <p>See all certifications </p>
        </div>
      </div>
      {modal ? <Modal /> : null}
    </section>
  )
}

const Content = (item: Prop) => {
  const [loading, setLoading] = useState(true);
  return (
    <>{loading ? <Skeleton /> : null}
      <div onClick={(e) => { item.handleClick(e, item.item.image) }} className={loading ? 'hidden' : 'visible'}>
        <img onLoad={() => { setLoading(false); }} loading="lazy"
          src={item.item.image} alt={item.item.image} />
      </div></>
  )
}

const Blog_content = (data: blog) => {
  const [loading, setLoading] = useState(true);

  const FollowTheLink = () => {
    window.open(data.data.canonical_url, '_blank');
  }
  
  return (
    // <>
    // {
    //    loading ? <Skeleton /> : null}
      <div onClick={FollowTheLink}>
        {/* className={loading ? 'hidden' : 'visible'} */}
        <img src={data.data.cover_image} alt={data.data.title} onLoad={() => { setLoading(false); }} />
        <p>{data.data.title}</p>
      </div>
    // </>
  )
}

interface Prop {
  item: any,
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: string) => void,
}

interface blog {
  data: any,
}

const Skeleton = () => {return(<div className='Skeleton' />)}

