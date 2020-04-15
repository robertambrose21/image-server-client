import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import AddImage from './Pages/AddImage';
import LinkBar from './LinkBar';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h2" align="center">
          Sler's Image Server
        </Typography>
        <LinkBar />
        <Router>
          <Switch>
            <Route path="/addImage">
              <AddImage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}
