import React from "react";
import RowContainer from "../../components/RowContainer";
import SideContent from "../../components/SideContent";
import AboutContent from "../../components/AboutContent";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Fade>
      <RowContainer>
        <SideContent />
        <AboutContent />
      </RowContainer>
    </Fade>
  );
}

export default About;
