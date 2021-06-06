import React from 'react';
// import AppBar from '../../components/AppBar';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
// import DropdownWithFilter from './components/DropdownWithFilter'
import ModalWindow from '../../components/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '../../App.css';
import sModal from '../../components/Modal/Modal.module.css';
import sContactList from '../../components/ContactList/ContactList.module.css';
import sFilter from '../../components/Filter/Filter.module.css';



const MAList = () => {
    return(
        <>
         <Container>
           <Row>
             <Col>
               <h2 >Add new employee</h2>

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
               <h2>Employees</h2>
               <Filter className={sFilter.Filter} />
               <ContactList className={sContactList.CnctList} />
             </Col>
           </Row>
         </Container>
       </>
    )
}

export default MAList;