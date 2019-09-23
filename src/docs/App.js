import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle, { ContentContainer } from './globalStyle';
import Header from './components/header';
import SideNavigation from './components/side-navigation';

import HomePage from './containers/home';
import ButtonPage from './containers/button';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  display: flex;
  flex: 1;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <SideNavigation />
        <ContentContainer>
          <Route exact path="/" component={HomePage} />
          <Route path="/components/button" component={ButtonPage} />
        </ContentContainer>
      </Content>
    </Container>
  );
}

export default App;
