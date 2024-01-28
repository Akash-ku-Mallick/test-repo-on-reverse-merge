import React, { useEffect, useState } from 'react';

import { getCertificateList } from '../utils/Apis';
import '../styles/blogs.css';
import { motion } from 'framer-motion';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  
  useEffect(() => {
    getCertificateList().then((res) => {
      setCertificates(res);
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className="title">Certificates</h1>
        <div className="blogs">
          {
            certificates.length > 0 ? certificates.map((certificate: { id: any; }) => {
              return (
                <Content key={certificate.id} certificate={certificate} />
              )
            }) : <div>
              <h1>Wait </h1>

            </div>
          }
        </div>
      </div>
    </div>
  )
}

const Content = (certificate: any) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const OnClickHandler = () => {
  }

  return (
    <motion.div>
      {
        isLoading ? <Skeleton /> :
        <div className={isLoading?'':""} onClick={OnClickHandler}>
          <img src={certificate.certificate.image} alt="certificate" onLoad={() => setIsLoading(false)} />
            <h3>{certificate.certificate.title}</h3>
            <p>{certificate.certificate.description}</p>
        </div>
      }
    </motion.div>
  )
}

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="s-banner"></div>
      <div className="s-header"></div>
      <div className="s-content"></div>
    </div>
  )
}
export default Certificates
