import React from 'react';

import styled from 'styled-components';
import About from './components/About';
import Intro from './components/Intro';

function App() {
  return (
    <Layout>
      <Intro />
      <About />
    </Layout>
  );
}

export default App;

const Layout = styled.div``;
