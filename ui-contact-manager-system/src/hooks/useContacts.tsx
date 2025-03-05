import { useEffect, useState } from 'react'
import { Contact } from '../types.d'
import { getContacts } from '../functions'

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
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
  return { contacts }
}
