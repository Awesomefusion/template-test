import './App.css';
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './components/Home.js';
import About from './components/About.js';


function App() {
  return (
  <div>
    <div className="thenavbar">
        <Container className="p-3">
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
          </ButtonToolbar>
          </Container>
    </div>

        <div className="header">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>  
          </Switch>
          </div>

    </div>

  );
}

export default App;
