import React from "react";

import { ReactComponent as TwitterIcon } from "./assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "./assets/icons/instagram.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">ProjectCipher</a>
          </div>
          <div className="social">
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="icon" />
            </a>
            <a
              href="https://twitter.com/project_cipher"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>We are getting ready</h1>
            <p>Please follow our socials to stay updated!</p>
          </div>
          <a href="https://discord.gg/6rT5mZdmr6">
            <div className="cta">Join Discord</div>
          </a>
        </div>
        <div className="footer">
          <span>© 2022 ProjectCipher - All rights reserved</span>
        </div>
      </div>
    );
  };
}

export default App;
