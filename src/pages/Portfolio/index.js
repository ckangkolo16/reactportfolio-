import React from "react";
import { ProjectsArr } from "../../utils/Projects";
import RowContainer from "../../components/RowContainer";
import ProjectImage from "../../components/ProjectImage";
import Line from "../../components/Line";
import ColSpacer from "../../components/ColSpacer";
import ContentWrapper from "../../components/ContentWrapper";
import ProjectContent from "../../components/ProjectContent";
import ProjectBtns from "../../components/ProjectBtns";
import Fade from "react-reveal/Fade";

function Portfolio() {
  return ProjectsArr.map((project, index) => (
    <Fade bottom>
      <div key={project.id}>
        {index !== 0 ? <Line /> : ""}
        <RowContainer>
          <ColSpacer />
          <ProjectImage title={project.title} image={project.image} />
          <ContentWrapper>
            <ProjectContent
              title={project.title}
              description={project.description}
              languages={project.languages}
            />
            <ProjectBtns
              github={project.github}
              deployed={project.deployed}
              demo={project.demo}
            />
          </ContentWrapper>
        </RowContainer>
      </div>
    </Fade>
  ));
}

export default Portfolio;
