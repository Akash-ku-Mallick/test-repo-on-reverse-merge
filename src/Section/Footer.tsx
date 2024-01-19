import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

import { Carousel } from '@trendyol-js/react-carousel';

import { Icon } from '@iconify/react';

import { db } from '../Configs/FirebaseConfig';

import '../styles/footer.css';
import '../pages/App.css';



function Contact() {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(4);
  const [enable, setEnable] = useState<boolean>(true);
  const [commentsData, setCommentsData] = useState<any[]>([]); // [name, comment, rating

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
    alert(msg);
  }

  const ResetFeeds = () => {
    setName('');
    setMail('');
    setComment('');
    setRating(4);
  }

  const CreateUser = async () => {
    try {
      const docRef = await addDoc(coll, {
        Name: name,
        Mail: mail,
        Comment: comment,
        Rating: rating
      });
      console.log("Document written with ID: ", docRef.id);
      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
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

    return axios.request(options).then(function (response) {
      console.log("you"); console.log(response.data);
      return true;
    }).catch(function (error) {
      console.error(error);
      return false;
    });


  }

  const sendForm = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    if (name === '' || mail === '' || comment === '') {
      CustPopupAlert("😁Please fill all the fields");
    }
    else {
      setEnable(false);
      let check = await CheckEmail();
      setEnable(true);
      if (check) {
        let user = await CreateUser();
        if (user) {
          ResetFeeds();
          CustPopupAlert("😁Thank You for your feedback");
        }
        else {
          CustPopupAlert("😁Something went wrong");
        }
      }
      else {
        CustPopupAlert("😁Please enter a valid email");
    }
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
  
  const labels: { [index: string]: string } = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };

  function Comments() {
    return (
      <div id='CommentContainer'>
        <Carousel className='carousel' show={1.2} slide={1} swiping={true}
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
        <div>
          {enable ? 
          <form>
            <div className="flexRow">
              <input type="text" placeholder="Name" name="name" value={name} id="name" disabled={!enable} onChange={updateName} />
              <input type="email" placeholder="Email" name="mail" id="mail" value={mail} disabled={!enable} onChange={updateMail} />
            </div>
            <input type="text" name="comment" id="comment" placeholder="Comment" value={comment} onChange={updateComment} disabled={!enable} />
            <input type="submit" value="Submit" onClick={(e)=>{sendForm(e)}} />
          </form>
          :
          <div className="flexRow">
            <h3>Submitting...</h3>
            {/* loading */}
          </div>
          }
        </div>
        
      </div>
    );
  }
  

  
  const Comment = (props: {name: string, comment: string, rating: number}) => {
    return (
      <div className='commentUI glass'>
        <div className='commentGrid'>
          <div className='commentText'>
            <div className="flexRow topSection">
              <Icon icon="mingcute:user-4-fill" color="white" />
              <h3>{props.name}</h3>
            </div>
              <Rating name="read-only" size="small" value={props.rating} readOnly />
          </div>
            <p className="comment">{props.comment}</p>
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
                  <Icon icon="majesticons:mail" color="white" className="footerIcon" />
                  
                  <p>
                    {"Let's connect on"}
                  </p>
                    <a href="mailto:akashkumarmallick@outlook.com">
                      {"akashkumarmallick@outlook.com"}
                    </a>
                  </div>
                <div className="footerLink">
                  <Icon icon="ion:call" color="white" className="footerIcon"/>
                  <p>
                    {"Let's talk on"}
                  </p>
                    <a href="tel:+917978961978">
                      {"+91 7978961978"}
                    </a>
                </div>
              </div>
              <div className="Socials ">
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
  
  
  
  
