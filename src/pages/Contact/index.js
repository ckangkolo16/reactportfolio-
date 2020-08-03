import React from "react";
import "./styles.css";
import RowContainer from "../../components/RowContainer";
import ColSpacer from "../../components/ColSpacer";
import Container from "../../components/Container";
import EmailBtn from "../../components/EmailBtn";
import LinkedInBtn from "../../components/LinkedInBtn";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <Container>
      <Fade>
        <RowContainer>
          <ColSpacer />
          <ColSpacer />
          <EmailBtn />
        </RowContainer>
        <br />
        <RowContainer>
          <ColSpacer />
          <ColSpacer />
          <LinkedInBtn />
        </RowContainer>
        <br />
        <RowContainer>
          <ColSpacer />
          <ColSpacer />
          <TwitterBtn />
        </RowContainer>
      </Fade>
    </Container>
  );
}

export default Contact;
