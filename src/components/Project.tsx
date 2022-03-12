import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import * as C from './ComStyle';
import { projects } from '../documents/projects';
import SliderImages from './SliderImages';

function Project() {
  return (
    <ProjectWrapper>
      <C.Container>
        <C.Title white>
          <h1 style={{ borderBottomColor: '#cccccc' }}>PROJECTS</h1>
        </C.Title>
        <Wrapper>
          {projects.map((project) => (
            <Container key={shortid.generate()}>
              <Ptitle>{project.ProjectName}</Ptitle>
              <Pdate>{project.date}</Pdate>
              <ContentWrapper>
                <ImgWrapper>
                  <SliderImages images={project.images} />
                </ImgWrapper>
                <ExplainWrapper>
                  <Explain>{project.explain}</Explain>
                  {project.summary.map((summary) => (
                    <Summary key={shortid.generate()}>
                      <SummaryTitle>{summary.title}</SummaryTitle>
                      <SummaryContent>{summary.content}</SummaryContent>
                    </Summary>
                  ))}
                </ExplainWrapper>
              </ContentWrapper>
            </Container>
          ))}
        </Wrapper>
      </C.Container>
    </ProjectWrapper>
  );
}

export default Project;

const ProjectWrapper = styled.div`
  background-color: #1d809f;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Ptitle = styled.div`
  font-family: BlackHanSans-Regular, sans-serif;
  font-size: 2.5rem;
`;

const Pdate = styled.div`
  color: #6c757d;
  font-size: 1.3rem;
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
const ImgWrapper = styled.div`
  height: 500px;
  width: 47%;
  margin-top: 26px;
  @media screen and (max-width: 1050px) {
    width: 80%;
  }
`;

const ExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-left: 3rem;
  margin-top: 10px;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

const Explain = styled.div`
  font-size: 1.1rem;
  font-weight: 550;
  padding: 15px 0;
  border-bottom: 1px solid #cccccc;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const SummaryTitle = styled.div`
  width: 30%;
  font-size: 1.2rem;
  font-family: DoHyeon-Regular, sans-serif;
  font-weight: bold;
  ::before {
    content: '✔';
    color: black;
    padding-right: 10px;
  }
`;

const SummaryContent = styled.div`
  width: 75%;
  font-family: DoHyeon-Regular, sans-serif;
  font-size: 1rem;
  font-weight: 550;
`;
