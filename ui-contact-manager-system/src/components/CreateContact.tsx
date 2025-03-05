import { useState } from 'react'
import { emptyContact, emptyErrors, FormErrors, FromContact } from '../types.d'
import { createContact } from '../functions'

const CreateContact = () => {
  const [formData, setFormData] = useState<FromContact>(emptyContact)
  const [formErrors, setFormErrors] = useState<FormErrors>(emptyErrors)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async () => {
    const response = await createContact(formData)
    if (!response) {
      console.error('getContacts returned an error')
    } else {
      alert('CREATED SUCCESSFULLY')
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
      handleSubmit()
    }
  }

  return (
    <div className="form-container">
      <h2>Create Contact</h2>
      <form
        onSubmit={(e) => {
          validateData(e)
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Jhon Doe"
            value={formData.name}
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
        </label>
        <label className="error-label">{formErrors.errorName}</label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="user@example.com"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
        </label>
        <label className="error-label">{formErrors.errorEmail}</label>
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            value={formData.phone === -1 ? '' : formData.phone}
            placeholder="70707070"
            onChange={(e) => {
              handleInputChange(e)
            }}
          />
        </label>
        <label className="error-label">{formErrors.errorPhone}</label>
        <button className="form-button">Create</button>
      </form>
    </div>
  )
}

export default CreateContact
