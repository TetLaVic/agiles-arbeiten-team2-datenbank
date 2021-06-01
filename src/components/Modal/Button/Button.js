import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Button.module.css';

const Btn = ({ children, onClick }) => {
  return (
    <Button variant="primary" onClick={onClick} className={styles.Btn}>
      {children}
    </Button>
  );
};

export default Btn;
