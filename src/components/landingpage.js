import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/images/Pfp2.JPG"
              alt="profilepic"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p> HTML/CSS | JavaScript | React | NodeJS </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/chobu-nkolo-kangkolo-08608b1a4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/ckangkolo16"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
