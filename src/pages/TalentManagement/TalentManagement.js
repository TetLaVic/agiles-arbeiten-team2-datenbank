import React from 'react';
// import AppBar from '../../components/AppBar';
// import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import AccordionBtn from '../../components/AccordionBtn'
// import DropdownWithFilter from './components/DropdownWithFilter'
// import ModalWindow from '../../components/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '../../App.css';
// import sModal from '../../components/Modal/Modal.module.css';
import sContactList from '../../components/ContactList/ContactList.module.css';
import sFilter from '../../components/Filter/Filter.module.css';

// const competenceList = {Methodenkompetenz: [], Sozialkompetenz: [], Fachkompetenz: [], Selbstkompetenz: []} 



const TalentManagement = () => {
    return(
        <>
         <Container>
           <h2>Wonach suchen Sie?</h2>
           <Row>  
             <Col>
               <h4>Mitarbeiter</h4>
               <Filter className={sFilter.Filter} />
               <ContactList className={sContactList.CnctList} />
             </Col>
               
             <Col>
               <h4 >Kompetenzen</h4>
<AccordionBtn text={"Methodenkompetenz"} subtext={['Problemlösung', 'Rhetorik', 'Präsentation','Moderation','Lernkompetenz','Lehrkompetenz/Didaktik','Projektmanagement']}/>
<AccordionBtn text={"Sozialkompetenz"} subtext={['Kommunikation', 'Teamarbeit', 'Mitarbeiterführung']}/>
<AccordionBtn text={"Fachkompetenz"} subtext={['Arbeitssicherheit', 'Datenschutz','EDV-Kenntnisse','Finanzmanagement','Fremdsprachen','Informationssicherheit','Marketing/Öffentlichkeitsarbeit','Personal und Organisation','Personalratsarbeit','Qulitätsmanagement','Recht und Verwaltungskompetenzen','Fachliche Schulungen in den FK', 'BSM', 'LS','ENG','INF','Sonstige Fachkenntnisse']}/>
<AccordionBtn text={"Selbstkompetenz"} subtext={['Leistungsvermögen','Entschlusskraft','Intelligenz','Selbstkritik','Flexibilität','Selbstmanagement','Gesundheitskompetenz']}/>
               {/* <ModalWindow
                 text={"Add student's info"}
                 className={sModal.ModalWindow}
               >
                 {<ContactForm />}
               </ModalWindow>
               <ModalWindow text={"Add employee's info"}>
                 {<ContactForm />}
               </ModalWindow> */}
             </Col>
             </Row>
         </Container>
       </>
    )
}

export default TalentManagement;