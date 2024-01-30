import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

import { Carousel } from '@trendyol-js/react-carousel';

import { Icon } from '@iconify/react';

import { db } from '../Configs/FirebaseConfig';

import '../styles/footer.css';
import '../pages/App.css';
import { motion } from "framer-motion";



function Contact() {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(4);
  const [enable, setEnable] = useState<boolean>(true);
  const [commentsData, setCommentsData] = useState<any[]>([]); // [name, comment, rating
  const [responceText, setResponce] = useState<string>(''); 

  const coll = collection(db, "comments");

  useEffect(() => {
    const getComments = async () => {
      
      let comments: any[] = [];
      const docsSnap = await getDocs(coll);
      docsSnap.forEach((doc) => {
        comments.push(doc.data());
      });
      setCommentsData(comments);
    }
    getComments();
  }, [])

  const CustPopupAlert = (msg: string) => {
    setResponce(msg);
    setTimeout(() => {
      ResetFeeds();
      setEnable(true);
      setResponce("");
    }, 3000);
  }

  const ResetFeeds = () => {
    setName('');
    setMail('');
    setComment('');
    setRating(4);
  }

  const CreateUser = async () => {
    const reply = new Promise<boolean>((resolve, reject) => {
      try {
        const docRef = addDoc(coll, {
          Name: name,
          Mail: mail,
          Comment: comment,
          Rating: rating
        });
        resolve(true);
      } catch (e) {
        console.error("Error adding document: ", e);
        reject(false);
      }
    }
    )
    return reply;

  }

  const CheckEmail = async () => {

    const options = {
      method: 'GET',
      url: 'https://global-email-v4.p.rapidapi.com/v4/WEB/GlobalEmail/doGlobalEmail',
      params: {
        email: mail,
        opt: 'VerifyMailbox:Express|VerifyMailbox:ExpressPremium',
        format: 'json'
      },
      headers: {
        'X-RapidAPI-Key': '6a16db616cmsh343395b6fef2123p1f4196jsnb18f458d69d6',
        'X-RapidAPI-Host': 'global-email-v4.p.rapidapi.com'
      }
    };

    var reply = new Promise<boolean>((resolve, reject) => {
      axios.request(options).then(function (response) {
        var score = 0;
        if (response.data.Records[0].DeliverabilityConfidenceScore)
        {
          var score = parseInt(response.data.Records[0].DeliverabilityConfidenceScore);
        }
        
        if ( score < 1) {
          reject(false);
        }
        else {
          resolve(true);
        }
      }
      ).catch(function (error) {
        reject(false);
      })
    })
    return reply;
  }

  const sendForm = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setEnable(false);
    setResponce("Checking Details");

    if (name === '' || mail === '' || comment === '') {
      CustPopupAlert("Please fill all the fields");
    }
    else {
      setResponce("Checking Email");
      CheckEmail().then((response) => {
      setResponce("Submitting");
      if (response) {
        CreateUser().then((response) => {
          if (response) {
            CustPopupAlert("😁Thank You for your feedback");
          }
          else {
            CustPopupAlert("😁Something went wrong");
          }
        }).catch((err) => {
          CustPopupAlert("😁Something went wrong");
        })
      }
      else {
        CustPopupAlert("😁Please enter a valid email");
    }
    }).catch((err) => {
      CustPopupAlert("😁Please enter a valid email");
    });
  }
}



  const updateMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  }
  
  const updateComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  }
  
  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  

  function Comments() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
      function updateScreen() {
        setDesktop(window.innerWidth > window.innerHeight);
      }
      window.addEventListener("resize", updateScreen);
      return () => window.removeEventListener("resize", updateScreen);
    }, []);



    return (
      <div id='CommentContainer'>
        <Carousel className='carousel' show={isDesktop?3:1} slide={1} swiping={true}
        autoSwipe={9000}
        leftArrow={<div style={{width: 20}}/>}
        rightArrow={<div style={{width: 20}}/>}
        
        responsive={true}>
          {commentsData.map((comment) => {
              return (
                <Comment name={comment.Name} comment={comment.Comment} rating={comment.Rating} />
              )
          })}
        </Carousel>
      </div>
    )
  }
  
  
    return (
      <div id="Contact" className="Contact">
        {commentsData.length>0?<Comments />:
        <div className="flexRow">
          <h3>Fetching Comments...</h3>
          {/* loading */}
        </div>}
        <motion.div
         id="commentBoxContainer"
         initial={{ 
          opacity: 0.5, 
          y: 20,
          filter: "blur(15px)",
        }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            filter: "none",
          }}
          transition={{ ease: 'easeOut', duration: 0.3, delay: 0.3, staggerChildren: 1, when: "beforeChildren"}}
          viewport={{ once: true }}>
          {enable ? 
          <form id="commentBox">
            <div className="flexRow">
              <input className="textInp" type="text" placeholder="Name" name="name" value={name} id="name" disabled={!enable} onChange={updateName} />
              <input className="textInp" type="email" placeholder="Email" name="mail" id="mail" value={mail} disabled={!enable} onChange={updateMail} />
            </div>
            <div className="flexRow">
              <input className="text2Inp" type="text" name="comment" id="comment" placeholder="Comment" value={comment} onChange={updateComment} disabled={!enable} />
              <input className="btnInp" type="submit" value="Submit" onClick={(e)=>{sendForm(e)}} />
            </div>
            <div><span>
              {" *Please be responsible with the information you share. "}
              </span></div>
          </form>
          :
          <div className="flexcol justCenterItems">
            <h3>{responceText}</h3>
            <div className="flexRow justCenterItems">
              <h3>{"Please wait "}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="white"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg>
            </div>
          </div>
          }
        </motion.div>
        
      </div>
    );
  }
  

  
  const Comment = (props: {name: string, comment: string, rating: number}) => {
    return (
      <div className='commentUI glass'>
        <div className='commentGrid'>
          <div className='commentText'>
            <div className="flexRow topSection">
              <Icon icon="mingcute:user-4-fill" style={{color: "rgb(138, 43, 227)", fontSize: '2rem'}} />
              <h3>{props.name}</h3>
            </div>
              <Rating name="read-only" size="small" value={props.rating} readOnly />
          </div>
            <p className="comment">{"\" "}{props.comment}{" \""}</p>
        </div>
      </div>
    )
  }
  
  
  
  
  // _______________Footer_________________   ------Start
  
  
  export default function Footer() {
  
  
      return (
        <section id="Footer" className="Footer panel" >
          <Contact />
          <div className="footerBody">
            <div className="footerHead">
              <div className="footerLinks">
                <div className="footerLink">
                  <Icon icon="majesticons:mail" />
                  
                  <p>
                    {"Let's connect on"}
                  </p>
                    <a href="mailto:akashkumarmallick@outlook.com">
                      {"akashkumarmallick@outlook.com"}
                    </a>
                  </div>
                <div className="footerLink">
                  <Icon icon="ion:call" />
                  <p>
                    {"Let's talk on"}
                  </p>
                    <a href="tel:+917978961978">
                      {"+91 7978961978"}
                    </a>
                </div>
              </div>
              <div className="Socials">
                <SocialLinks />
              </div>
            </div>
            <span className="copyright">
              © Designed by Akash kumar Mallick 2023
            </span>
          </div>
        </section>
      );
    }
  
  
function SocialLinks() {
    return (
      <>
        <a href="linkedin" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Let's connect<br /> through Linkedin<br /> It will be fun" ><Icon icon="logos:linkedin-icon" /></a>
          <a href="Outlook" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Want to send <br />an e-mail<br /> Just tap here" ><Icon icon="vscode-icons:file-type-outlook" color="white" /></a>
          <a href="Dribbble" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Check out my mockups<br /> and designes<br /> on Dtibbble<br />Thank You" ><Icon icon="logos:dribbble-icon" color="white" /></a>
          <a href="Github" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Check my current work <br />by visiting directly <br />to my Github Page <br /> Don't forget to follw me there" ><Icon icon="uiw:github" color="white" /></a>
          <a href="Gmail" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Mail or Meet can be arrenged <br />" > <Icon icon="logos:google-gmail" color="white" /> </a>
      </>
    )
  }
  
  
  //  _______________Footer_________________   ------End
  
  
  
  
