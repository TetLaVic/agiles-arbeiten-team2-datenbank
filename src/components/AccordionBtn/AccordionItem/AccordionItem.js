import React from 'react';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const AccordionItem = ({ item }) => {
  return (
      <Card.Link href="#">{item}</Card.Link>
  );
};

export default AccordionItem;
