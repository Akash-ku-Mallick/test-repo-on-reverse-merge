import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import { Tooltip } from "react-tooltip";
import { LinkedIn, Outlook, Dribbble, Github, Gmail } from "../vectors";



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
  
  const updateComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <section id="Contact" className="Contact">
        <Comments />
        <form className="RatingForm glass">
          <input
            className="input"
            value={name}
            onChange={updateName}
            name="Name"
            type="text"
            placeholder="Enter Your Name.."
          />
          <input
            className="input"
            onChange={updateMail}
            value={mail}
            name="Mail"
            type="text"
            placeholder="Enter Your E-mail ID.."
          />
          <textarea
            className="input"
            onChange={updateComment}
            value={comment}
            name="comment"
            placeholder="Tell me something..."
          />
          <span>
            <Rating
              name="text-feedback"
              value={rating}
              emptyIcon={
                <StarBorderOutlinedIcon style={{ opacity: 1 }} fontSize="inherit" />
              }
              icon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              onChange={(event, newValue) => {
                newValue !== null ? setRating(newValue) : setRating(1);
              }}
            />
            <p>{labels[rating]}</p>
          </span>
          <button onClick={sendForm}>SEND</button>
        </form>
      </section>
    );
  }
  
  
  //___________________________________
  
  
 function Comments() {
    return (
      <div id='CommentContainer'>
        <div className='commentUI glass'>
          <div className='flexRow'> 
            <img></img>
            <label>Anupam </label>
            <div className='jselfRight'>
              <img></img>
              <StarBorderOutlinedIcon  />
            </div>
          </div>
          <p>I have nothing to say</p>
        </div>
      </div>
    )
  }
  
  
  
  
  
  
  
  // _______________Footer_________________   ------Start
  
  
  export default function Footer() {
  
  
      return (
        <section id="Footer" className="Footer panel" >
          <Contact />
          <hr style={{ width: '90vw'}} />
          <div style={{height: '25%'}}>
          <div className='flexRow'>
            <div className='bordR footdesc'>
            <h3>Services</h3>
            </div>
            <div className='bordR footdesc'>
            <h3>Works</h3>
            </div>
            <div className='bordR footdesc'>
            <h3>Links</h3>
            <div className="Socials ">
            <SocialLinks />
            </div>
            </div>
          </div>
          
          <span className="copyright">
            Copyright reserved under Akash kumar Mallick
          </span>
          </div>
          <Tooltip
            id="Footer-tooltip" style={{}}/>
        </section>
      );
    }
  
  
function SocialLinks() {
    return (
      <>
        <a href="linkedin" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Let's connect<br /> through Linkedin<br /> It will be fun" ><LinkedIn /></a>
          <a href="Outlook" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Want to send <br />an e-mail<br /> Just tap here" ><Outlook /></a>
          <a href="Dribbble" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Check out my mockups<br /> and designes<br /> on Dtibbble<br />Thank You" ><Dribbble /></a>
          <a href="Github" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Check my current work <br />by visiting directly <br />to my Github Page <br /> Don't forget to follw me there" ><Github /></a>
          <a href="Gmail" data-tooltip-id="Footer-tooltip" data-tooltip-html="Hello<br />Mail or Meet can be arrenged <br />" ><Gmail /></a>
      </>
    )
  }
  
  
  //  _______________Footer_________________   ------End
  
  
  
  
