import React from 'react';

import styled from 'styled-components';
import About from './components/About';
import Intro from './components/Intro';
import Skills from './components/Skills';

function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Skills />
    </Layout>
  );
}

export default App;

const Layout = styled.div``;
