// import { Component } from 'react';
import AppBar from './components/AppBar';
// import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';
// // import DropdownWithFilter from './components/DropdownWithFilter'
// import ModalWindow from './components/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './App.css';
// import sModal from './components/Modal/Modal.module.css';
// import sContactList from './components/ContactList/ContactList.module.css';
// import sFilter from './components/Filter/Filter.module.css';
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import { v4 as genId } from 'uuid';


const MAList = lazy(() =>
  import("./pages/MAList" /*WebpackChunkName: MAList */)
);
const TalentManagement = lazy(() =>
  import("./pages/TalentManagement" /*WebpackChunkName: TalentManagement */)
);
const Profile = lazy(() =>
  import("./pages/Profile" /*WebpackChunkName: Profile */)
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
      <p>Loading...</p>
        }
      >
        <Switch>
          <Route exact path="/" component={MAList} />
          <Route path="/:name" component={Profile} />
          <Route path="/talent" component={TalentManagement} />
          <Route component={MAList} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;





// class App extends Component {
//   render() {
//     return (
//       <>
//         <AppBar className={styles.AppBar} />
//         <Container>
//           <Row>
//             <Col>
//               <h2 className={styles.h2Header}>Add new employee</h2>

//               <ModalWindow
//                 text={"Add student's info"}
//                 className={sModal.ModalWindow}
//               >
//                 {<ContactForm />}
//               </ModalWindow>
//               <ModalWindow text={"Add employee's info"}>
//                 {<ContactForm />}
//               </ModalWindow>
//             </Col>
//             <Col>
//               <h2 className={styles.h2Header}>Employees</h2>
//               <Filter className={sFilter.Filter} />
//               <ContactList className={sContactList.CnctList} />
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }


