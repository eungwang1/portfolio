import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import * as C from './ComStyle';
import { projects } from '../documents/projects';
import SliderImages from './SliderImages';

interface ProjectProps {
  setProjectScroll: Dispatch<SetStateAction<boolean>>;
  projectScroll: boolean;
}

const Project: React.FunctionComponent<ProjectProps> = ({ projectScroll, setProjectScroll }) => {
  const ProjectRef = useRef<null | HTMLDivElement>(null);
  const [modalState, setModalState] = useState(false);
  const [currentImgUrl, setCurrentImgUrl] = useState('');

  const closeModal = () => {
    setModalState(false);
    document.body.style.overflow = 'unset';
  };
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
      {modalState && (
        <ModalWrapper>
          <Dim onClick={closeModal} />
          <Modal>
            <StyledImg src={currentImgUrl} alt="" />
          </Modal>
        </ModalWrapper>
      )}
      <C.Container>
        <C.Title white onClick={() => setProjectScroll(true)}>
          <h1 style={{ borderBottomColor: '#cccccc' }}>PROJECTS</h1>
        </C.Title>
        <Wrapper>
          {projects.map((project, idx) => (
            <Container key={shortid.generate()}>
              <Ptitle>{project.ProjectName}</Ptitle>
              <Pdate>{project.date}</Pdate>
              <ContentWrapper>
                <ImgWrapper>
                  <SliderImages
                    images={project.images}
                    setCurrentImgUrl={setCurrentImgUrl}
                    setModalState={setModalState}
                  />
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
};

export default Project;

const Modal = styled.div`
  width: 50vw;
  height: 80vh;
  background-color: white;
  position: fixed;
  z-index: 900;
  padding: 15px;
`;
const ModalWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Dim = styled.div`
  z-index: 500;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.2;
`;

const ProjectWrapper = styled.div`
  background-color: #1d809f;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
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
