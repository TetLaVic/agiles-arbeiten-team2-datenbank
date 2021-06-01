import { Component } from 'react';
import AppBar from './components/AppBar';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import ModalWindow from './components/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.css';
import sModal from './components/Modal/Modal.module.css';
import sContactList from './components/ContactList/ContactList.module.css';
// import { v4 as genId } from 'uuid';

class App extends Component {
  render() {
    return (
      <>
        <AppBar className={styles.AppBar} />
        <Container>
          <Row>
            <Col>
              <h2 className={styles.h2Header}>Talent management</h2>

              <ModalWindow
                text={"Add student's info"}
                className={sModal.ModalWindow}
              >
                {<ContactForm />}
              </ModalWindow>
              <ModalWindow text={"Add employee's info"}>
                {<ContactForm />}
              </ModalWindow>
            </Col>
            <Col>
              <h2 className={styles.h2Header}>Students and employees</h2>
              <Filter />
              <ContactList className={sContactList.ContactList} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
