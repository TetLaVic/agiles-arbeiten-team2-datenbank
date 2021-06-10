import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import AccordionItem from './AccordionItem'

const AccordionBtn = ({text, subtext}) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            {text}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ListGroup variant="flush">
              {subtext.map((item) => <ListGroup.Item key={item}><AccordionItem item={item}/></ListGroup.Item>)}
            </ListGroup>
          </Card.Body>
          {/* <Card.Body>Hello! I'm the body</Card.Body> */}
        </Accordion.Collapse>
      </Card>
      {/* <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card> */}
    </Accordion>
  );
};

export default AccordionBtn;
