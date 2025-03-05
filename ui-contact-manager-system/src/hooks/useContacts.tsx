import { useEffect, useState } from 'react'
import { Contact } from '../types.d'
import { deleteContact, getContacts } from '../functions'

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    console.log('useEffect')
    const fetchContacts = async () => {
      const response = await getContacts()
      if (!response) {
        console.error('getContacts returned an error')
      } else {
        setContacts(response)
      }
    }

    fetchContacts()
  }, [])

  const handleDelete = async (id: string) => {
    const response = await deleteContact(id)
    if (!response) {
      console.error('deleteContact returned an error')
    } else {
      alert('DELETED SUCCESSFULLY')
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      )
    }
  }

  return { contacts, handleDelete }
}
