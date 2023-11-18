// import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/techStack.css'
import '../pages/App.css';

const TechStack = () => {
  return (
    <div className='panel'>
      TechStack
      <div className='techsContainerGrid'>
        <Icon icon="skill-icons:javascript" />
        <Icon icon="skill-icons:typescript" />
        <Icon icon="skill-icons:react-light" />
        <Icon icon="skill-icons:figma-light" />
        <Icon icon="skill-icons:python-light" />
        <Icon icon="vscode-icons:file-type-firebase" />
        <Icon icon="logos:nodejs-icon-alt" />
        <Icon icon="vscode-icons:file-type-html" />
        <Icon icon="vscode-icons:file-type-css" />
        <Icon icon="devicon:github" />
        <Icon icon="devicon:threejs-wordmark" />
      </div>
    </div>
  );
}


const TechStackWithName = () => {
    return (
      <div className='panel'>
        <div className='techPanel'>
        <div className='techHeader'>
          <span>TechStack</span>
        </div>
        <TechBody />
        </div>
      </div>
    );
  }

const TechBody = () => {
  return (
    <div className='techBody'>
          <div className='techCol'>
            <div className='ColHead'>
              <span>Frontend</span>
            </div>
            <hr />
            <div className='techs'>
              <Icon icon="vscode-icons:file-type-html" />
              <h3>HTML</h3>
            </div>
            <div className='techs'>
              <Icon icon="vscode-icons:file-type-css" />
              <h3>CSS</h3>
            </div>

            <div className='techs'>
              <Icon icon="skill-icons:javascript" />
              <h3>Javascript</h3>
            </div>
            <div className='techs'>
              <Icon icon="skill-icons:typescript" />
              <h3>Typescript</h3>
            </div>

            <div className='techs'>
              <Icon icon="skill-icons:react-light" />
              <h3>React</h3>
            </div>

            <div className='techs'>
              <Icon icon="devicon:threejs-wordmark" fill='rgb(255, 255, 200)' />
              <h3>Three.js</h3>
            </div>
          </div>

          <div className='verticalLine' />

          <div className='techCol'>
            <div className='ColHead'>
              <span>Backend</span>
            </div>
            <hr />
            <div className='techs'>
              <Icon icon="skill-icons:python-light" />
              <h3>Python</h3>
            </div>

            <div className='techs'>
              <Icon icon="vscode-icons:file-type-firebase" />
              <h3>Firebase</h3>
            </div>
            <div className='techs'>
              <Icon icon="logos:nodejs-icon-alt" />
              <h3>Nodejs</h3>
            </div>
          </div>

          <div className='verticalLine' />

          <div className='techCol'>
            <div className='ColHead'>
              <span>Tools</span>
            </div>
            <hr />
            <div className='techs'>
              <Icon icon="skill-icons:figma-light" />
              <h3>Figma</h3>
            </div>
            <div className='techs'>
              <Icon icon="uil:github" color="white" />
              <h3>Github</h3>
            </div>
          </div>


        </div>
  )
  }

  export { TechStack, TechStackWithName }