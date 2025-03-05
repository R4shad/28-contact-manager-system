import { Contact } from './types.d'

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
