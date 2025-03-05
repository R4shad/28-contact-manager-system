import { Contact, FromContact } from './types.d'

const API_URL = 'http://localhost:3000/api/contacts/'

export const getContacts = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      console.error('Api response error')
    } else {
      const data: Contact[] = await response.json()
      return data
    }
  } catch (error) {
    console.error('Error getting contacts:', error)
  }
}

export const createContact = async (contact: FromContact) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })

    if (!response.ok) {
      console.error('Api response error')
    } else {
      const data: Contact = await response.json()
      return data
    }
  } catch (error) {
    console.error('Error creating contacts:', error)
  }
}

interface EditContactParams {
  contact: FromContact
  id: string
}

export const editContact = async ({ contact, id }: EditContactParams) => {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })

    if (!response.ok) {
      console.error('Api response error')
    } else {
      const data: Contact = await response.json()
      return data
    }
  } catch (error) {
    console.error('Error editing contacts:', error)
  }
}

export const deleteContact = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      console.error('Api response error')
    } else {
      const data: Contact = await response.json()
      return data
    }
  } catch (error) {
    console.error('Error deleting contact:', error)
  }
}
