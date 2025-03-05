import { Link } from 'react-router-dom'
import { useContacts } from '../hooks/useContacts'

const ContactList = () => {
  const { contacts, handleDelete, search, setSearch, loading } = useContacts()

  return (
    <div className="contact-list-container">
      <span>
        Search Contact:{' '}
        <input
          className="input-serach"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </span>

      {loading && <div className="loading-spinner">🔄 Loading...</div>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className="buttons-container">
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDelete(contact.id)
                  }}
                >
                  Delete
                </button>
                <Link to="/edit" state={{ contact }}>
                  <button className="delete-button">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList
