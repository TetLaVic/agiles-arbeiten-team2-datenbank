import React from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, id, onDeleteContact }) => {
  return (
    <li id={id} className={styles.listItem}>
      <Link className={styles.Link}
                to={{ pathname: `/profile/${name}` }}>
      {name}
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
        className={styles.buttonListItem}
      >
        Delete
      </button>
      </Link>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default withRouter(ContactListItem);
