import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import '../styles/PdfViewer.css';

type Props = {};

export default function Resume({}: Props) {

    const [resume, setResume] = useState("../../assets/myResume.pdf");

    useEffect(() => {
        console.log("Resume");
    }, []);

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
        <iframe
          src="../../assets/myResume.pdf"
          title="PDF Viewer"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </div>
  );
}
