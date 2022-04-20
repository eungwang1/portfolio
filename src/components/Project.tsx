import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import * as C from './ComStyle';
import { projects } from '../documents/projects';
import SliderImages from './SliderImages';
import SliderFrame from './SliderFrame';
import GalleryModal from './GalleryModal';

interface ProjectProps {
  setProjectScroll: Dispatch<SetStateAction<boolean>>;
  projectScroll: boolean;
}

const Project: React.FunctionComponent<ProjectProps> = ({ projectScroll, setProjectScroll }) => {
  const ProjectRef = useRef<null | HTMLDivElement>(null);
  const [modalState, setModalState] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(-1);

  useEffect(() => {
    if (projectScroll === true) {
      ProjectRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
      setProjectScroll(false);
    }
  }, [projectScroll]);
  return (
    <ProjectWrapper ref={ProjectRef}>
      <C.Container>
        <C.Title white onClick={() => setProjectScroll(true)}>
          <h1 style={{ borderBottomColor: '#cccccc' }}>PROJECTS</h1>
        </C.Title>
        <Wrapper>
          {projects.map((project, idx) => (
            <>
              {modalState && (
                <GalleryModal currentImgIndex={currentImgIndex} setModalState={setModalState} projects={projects} />
              )}
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
            </>
          ))}
        </Wrapper>
      </C.Container>
    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  background-color: #1d809f;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  margin-top: 2.5rem;
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-wrap: break-word;
  align-items: center;
  padding: 50px 20px;
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const ImgWrapper = styled.div`
  width: 80%;
  margin-top: 26px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const ExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 3rem;
  margin-top: 30px;
`;

const Explain = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  padding: 15px 0;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  span {
    font-weight: 700;
    display: inline-block;
    margin-bottom: 10px;
  }
  ul {
    margin-top: 5px;
    padding-left: 25px;
    font-weight: 600;
  }
  .lessbr {
    margin-top: 10px;
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
