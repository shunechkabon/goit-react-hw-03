import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import s from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => { 
    return (
        <li className={s.contactItem}>
            <div>
                <p><FontAwesomeIcon icon={faUser} />  {contact.name}</p>
                <p><FontAwesomeIcon icon={faPhone} />  {contact.number}</p>
            </div>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
    );
}

export default Contact;