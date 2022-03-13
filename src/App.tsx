import React, { useState } from 'react';

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
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;

const Layout = styled.div``;
