import { useEffect, useState } from 'react'
import { Contact } from '../types.d'
import { deleteContact, getContacts, searchContact } from '../functions'
import { useDebounce } from './useDebounce'

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    console.log('useEffect')
    const fetchContacts = async () => {
      setLoading(true) // Iniciar carga
      const response = await getContacts()
      setLoading(false) // Finalizar carga
      if (!response) {
        console.error('getContacts returned an error')
      } else {
        setContacts(response)
      }
    }

    const fetchSearch = async () => {
      setLoading(true)
      const response = await searchContact(debouncedSearch)
      setLoading(false)
      if (!response) {
        console.error('error searching contacts')
      } else {
        setContacts(response)
      }
    }

    if (debouncedSearch === '') {
      fetchContacts()
    } else {
      fetchSearch()
    }
  }, [debouncedSearch])

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

  return { contacts, handleDelete, search, setSearch, loading }
}
