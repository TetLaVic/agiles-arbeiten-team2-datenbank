import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const AccordionBtn = ({ text }) => {
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
              <ListGroup.Item>
                <Card.Link href="#">Projektmanagement</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">Moderation</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">Rhetorik</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">Präsentation</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">Problemlösung</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">Lehrkompetenz/Didaktik</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">Lernkompetenz</Card.Link>
              </ListGroup.Item>
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
