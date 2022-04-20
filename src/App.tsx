import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import About from './components/About';
import Archving from './components/Archving';
import Intro from './components/Intro';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  const [aboutScroll, setAboutScroll] = useState(false);
  const [skillsScroll, setSkillsScroll] = useState(false);
  const [archvingScroll, setArchvingScroll] = useState(false);
  const [projectScroll, setProjectScroll] = useState(false);
  const [scrollToTopBtnState, setScrollToTopBtnState] = useState(false);

  const scrollBtnRef = useRef<null | HTMLDivElement>(null);
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
      setScrollToTopBtnState(true);
    } else {
      setScrollToTopBtnState(false);
    }
  });
  const scrollToTOP = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <Inner>
        <Intro
          setAboutScroll={setAboutScroll}
          setSkillsScroll={setSkillsScroll}
          setArchvingScroll={setArchvingScroll}
          setProjectScroll={setProjectScroll}
        />
        <About aboutScroll={aboutScroll} setAboutScroll={setAboutScroll} />
        <Skills skillsScroll={skillsScroll} setSkillsScroll={setSkillsScroll} />
        <Archving archvingScroll={archvingScroll} setArchvingScroll={setArchvingScroll} />
        <Project projectScroll={projectScroll} setProjectScroll={setProjectScroll} />
        {scrollToTopBtnState && (
          <ScrollToTopBtn scrollToTopBtnState onClick={scrollToTOP} ref={scrollBtnRef}>
            ▲
          </ScrollToTopBtn>
        )}
      </Inner>
    </Layout>
  );
}

export default App;

interface IScrollToTopBtn {
  scrollToTopBtnState: boolean;
}
const Inner = styled.div`
  width: 100vw;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScrollToTopBtn = styled.div<IScrollToTopBtn>`
  position: fixed;
  border-radius: 10px;
  padding: 10px 20px;
  transition-property: opacity;
  transition-duration: 1s;
  background-color: #ffa500;
  bottom: 15px;
  left: 15px;
  z-index: 119;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #f5aa20;
  }
  display: ${(props) => (props.scrollToTopBtnState ? 'block' : 'none')};
  opacity: ${(props) => (props.scrollToTopBtnState ? '1' : '0')};
`;
