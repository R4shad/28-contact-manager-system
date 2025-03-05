import { Contact, FromContact } from './types.d'

const API_URL = 'http://localhost:3000/api/contacts'

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
    console.error('Error getting contacts:', error)
  }
}
