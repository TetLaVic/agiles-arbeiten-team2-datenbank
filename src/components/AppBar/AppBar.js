import React from 'react';
import SiteNav from './SiteNav'
import styles from './AppBar.module.css';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
  return <Navbar bg="primary" variant="dark" className={styles.Navbar} >
<SiteNav/>
    </Navbar>;
};

export default AppBar;
