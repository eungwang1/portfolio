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

  overflow-wrap: break-word;
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
  width: 47%;
  height: 470px;
  margin-top: 26px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 660px) {
    height: 385px;
  }
  @media screen and (max-width: 550px) {
    height: 300px;
  }
  @media screen and (max-width: 450px) {
    height: 240px;
  }
`;

const ExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 48%;
  margin-left: 3rem;
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    margin-top: 30px;
    width: 80%;
    margin-left: 0;
  }
`;

const Explain = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding: 15px 0;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  span {
    font-weight: 700;
  }
  ul {
    margin-top: 5px;
    padding-left: 25px;
    font-weight: 600;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;
const SummaryTitle = styled.div`
  width: 33%;
  padding-right: 1.5rem;
  font-size: 1.1rem;
  font-family: DoHyeon-Regular, sans-serif;
  font-weight: bold;
  ::before {
    content: '✔';
    color: black;
    padding-right: 10px;
  }
  @media screen and (max-width: 1000px) {
    width: 45%;
  }
  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;

const SummaryContent = styled.div`
  width: 67%;

  font-family: DoHyeon-Regular, sans-serif;
  font-size: 1rem;
  overflow-wrap: break-word;
  font-weight: 550;
  a {
    color: #93b0db;
    :hover {
      color: #1890ff;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 55%;
  }
  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;
