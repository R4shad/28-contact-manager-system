import { useState } from 'react'
import {
  Contact,
  emptyContact,
  emptyErrors,
  FormErrors,
  FromContact,
} from '../types.d'
import { editContact } from '../functions'
import { useLocation } from 'react-router-dom'

const CreateContact = () => {
  const location = useLocation()
  const { contact } = (location.state as { contact: Contact }) || {}

  // Manejar el estado inicial con un contacto vacío si no se pasa contacto
  const [formData, setFormData] = useState<FromContact>(contact || emptyContact)
  const [formErrors, setFormErrors] = useState<FormErrors>(emptyErrors)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleEdit = async () => {
    const response = await editContact({ contact: formData, id: contact.id })
    if (!response) {
      console.error('Error editing contact')
    } else {
      alert('Contact created successfully')
      setFormData(emptyContact)
    }
  }

  const validateData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Resetear errores antes de la validación
    let hasError = false
    const newErrors = { ...emptyErrors }

    if (formData.name === '') {
      newErrors.errorName = 'Name is required'
      hasError = true
    }
    if (formData.email === '') {
      newErrors.errorEmail = 'Email is required'
      hasError = true
    }
    if (formData.phone === -1) {
      newErrors.errorPhone = 'Phone is required'
      hasError = true
    }

    setFormErrors(newErrors)

    // Solo llamar a handleSubmit si no hay errores
    if (!hasError) {
      handleEdit()
    }
  }

  // Si no se pasa un contact en el estado, mostrar un mensaje de error
  if (!contact) {
    return <div>Contact not found!</div>
  }

  return (
    <div className="form-container">
      <h2>Create Contact</h2>
      <form onSubmit={validateData}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        {formErrors.errorName && (
          <label className="error-label">{formErrors.errorName}</label>
        )}

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="user@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        {formErrors.errorEmail && (
          <label className="error-label">{formErrors.errorEmail}</label>
        )}

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            placeholder="70707070"
            value={formData.phone === -1 ? '' : formData.phone}
            onChange={handleInputChange}
          />
        </label>
        {formErrors.errorPhone && (
          <label className="error-label">{formErrors.errorPhone}</label>
        )}

        <button type="submit" className="form-button">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateContact
