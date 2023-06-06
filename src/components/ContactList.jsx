import PropTypes from 'prop-types';

export default function ContactList({ FilteredArr, onDeleteContact }) {
  return (
    <>
      <ul>
        {FilteredArr.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  FilteredArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};
