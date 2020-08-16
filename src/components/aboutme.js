import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="resume">Chobu Kangkolo</h1>
        <img className="pfp" src="/images/Pfp.jpg"></img>
        <br />
        <p className="aboutme">
          Hi, My name is Chobu Kangkolo and I was born in Cameroon, West Africa.
          I have lived in the United States for about 20 years and i've spent
          the majority of that time here in Kansas City, Missouri. I have also
          lived in Texas, Maryland and Georgia but of all those places, I prefer
          Missouri.I am experiencing the joys of being a father to my 6 month
          old daughter Eliora and when i'm not with her I am either playing
          video games, drawing or working out. I am an avid an sports fan so
          much so that I fall asleep to Sportcenter. When I have the time, I
          love taking pictures around the city and binge watching documentaries
          on netflix.From time to time, I challenge myself to master new ideas
          and to learn more about my different interests. One of those interests
          which could possibly reap great rewards if mastered are computers. I
          am currently taking a break from my undergrad program at NWMSU to
          learn coding skills which could hopefully make me desirable in the
          growing tech world. You can follow me and my
          <a href="https://github.com/ckangkolo16" target="_blank">
            progress
          </a>
          here.
        </p>
      </div>
    );
  }
}

export default About;
