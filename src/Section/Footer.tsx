import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import { Carousel } from '@trendyol-js/react-carousel';

import { Icon } from '@iconify/react';

import '../styles/footer.css';
import '../pages/App.css';

 function Contact() {
    const [name, setName] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [rating, setRating] = useState<number>(4);
    
    function sendForm() {
      console.log(name, mail, comment, rating);
      
      console.log("Sent")
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
  
  
    return (
      <div id="Contact" className="Contact">
        <Comments />
        <div>
          <form>
            <div className="flexRow">
              <input type="text" placeholder="Name" name="name" id="name" onChange={updateName} />
              <input type="email" placeholder="Email" name="mail" id="mail" onChange={updateMail} />
            </div>
            <input type="text" name="comment" id="comment" placeholder="Comment" onChange={updateComment} />
          </form>
        </div>
        {/* <Rating
              name="text-feedback"
              value={rating}
              emptyIcon={
                <StarBorderOutlinedIcon style={{ opacity: 1 }} fontSize="inherit" />
              }
              icon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              onChange={(event, newValue) => {
                newValue !== null ? setRating(newValue) : setRating(1);
              }}
            /> */}
      </div>
    );
  }
  
  
  //___________________________________
  const commentsData = [
    {
      name: "Akash Kumar Mallick",
      comment: "This is a very good website",
      rating: 5
    },
    {
      name: "Pratikshya Puhan",
      comment: "This is a very good website",
      rating: 5
    },
    {
      name: "Annu Mallik",
      comment: "This is a very good website",
      rating: 5
    },
    {
      name: "Kumar Mallick",
      comment: "This is a very good website",
      rating: 5
    },
    {
      name: "Yash Kumar Mallick",
      comment: "This is a very good website",
      rating: 5
    },
  ]
  
 function Comments() {
    return (
      <div id='CommentContainer'>
        <Carousel className='carousel' show={1} slide={1} swiping={true}
        autoSwipe={3000}
        leftArrow={<div/>}
        rightArrow={<div/>}
        responsive={true}>
          {commentsData.map((comment) => {
            return (
              <Comment name={comment.name} comment={comment.comment} rating={comment.rating} />
            );
          })}
        </Carousel>
      </div>
    )
  }

  
  const Comment = (props: {name: string, comment: string, rating: number}) => {
    return (
      <div className='commentUI glass'>
        <div className='commentGrid'>
          <div className='commentText'>
            <div className="flexRow topSection">
              <Icon icon="mingcute:user-4-fill" color="white" />
              <h3>{props.name}</h3>
              <Rating name="read-only" size="small" value={props.rating} readOnly />
            </div>
            <p>{props.comment}</p>
          </div>
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
  
  
  
  
