import React, { Component } from 'react';
import './App.css';

import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import Sections from './components/sections';
class App extends Component {
 render(){
   return(
     <Container>
      <Row>
        <Col style={{border: "2px solid red"}}>
        <Form>
          <Form.Row>
          <Col>
          <Form.Control type="text" placeholder="Normal text" />
          </Col>
          <Col>
          <Button variant="primary">Search</Button>
          </Col>  
          </Form.Row>
        </Form>
        </Col>
      </Row>
      <Sections />
     </Container>
   )
 }
}

export default App;

