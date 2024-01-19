import React, { useEffect, useState } from "react";
import ContentLoader from 'react-content-loader';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { FREBASE_APP}  from "../Configs/FirebaseConfig";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import '../styles/PdfViewer.css';


export default function Resume() {

    const [resume, setResume] = useState("");
    const storage = getStorage(FREBASE_APP, "gs://akash-my-portfolio.appspot.com");
    const storageRef = ref(storage, "Resume.pdf");

  
    useEffect(() => {
      getDownloadURL(storageRef)
        .then((url) => {
          setResume(url);
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/object-not-found":
              console.log("File doesn't exist");
              break;
            case "storage/unauthorized":
              console.log("User doesn't have permission to access the object");
              break;
            case "storage/canceled":
              console.log("User canceled the upload");
              break;
            case "storage/unknown":
              console.log(
                "Unknown error occurred, inspect the server response"
              );

              break;
          }
        });
    });



    const SaveAction = () => {
        console.log("Save");
    }
    const ShareAction = () => {
        console.log("Share");
    }
    const LinkedInAction = () => {
        console.log("LinkedIn");
    }
    const GitHubAction = () => {
        console.log("GitHub");
    }
    const ChatAction = () => {
        console.log("Chat");
    }


  return (
    <div className="panale">
      {resume!==""?
      <div className="panale">
      <div className="pdfheader">
        <h1>Akash Kumar Mallick</h1>
        <div className="IconPanale">
          <div onClick={SaveAction}>
            <SaveIcon htmlColor="rgb(208, 208, 208)" />
          </div>
          <div onClick={ShareAction}>
            <ShareIcon htmlColor="rgb(208, 208, 208)" />
          </div>
          <div onClick={LinkedInAction}>
            <LinkedInIcon htmlColor="rgb(208, 208, 208)" />
          </div>
          <div onClick={GitHubAction}>
            <GitHubIcon htmlColor="rgb(208, 208, 208)" />
          </div>
          <div onClick={ChatAction}>
            <ChatRoundedIcon htmlColor="rgb(208, 208, 208)" />
          </div>
        </div>
      </div>
      <div className="pdfFrame">
        <object data={resume} type="application/pdf" width="100%" height="100%">
        <p>PDF cannot be displayed. <a href={resume} >Download PDF</a> instead.</p>
       </object>
      </div>
      </div>
      :
      <ContentLoader
      speed={1}
      width={'100vw'}
      height={'100vh'}
      viewBox="0 0 450 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="172" y="53" rx="0" ry="0" width="2" height="300" />
      <rect x="386" y="55" rx="0" ry="0" width="2" height="300" />
      <rect x="171" y="53" rx="0" ry="0" width="216" height="2" />
      <rect x="171" y="353" rx="0" ry="0" width="216" height="2" />
      <circle cx="277" cy="147" r="44" />
      <rect x="174" y="53" rx="0" ry="0" width="216" height="41" />
      <rect x="198" y="207" rx="0" ry="0" width="160" height="9" />
      <rect x="231" y="236" rx="0" ry="0" width="92" height="9" />
      <rect x="206" y="324" rx="0" ry="0" width="146" height="51" />
    </ContentLoader>
    }
    </div>
  );
}
