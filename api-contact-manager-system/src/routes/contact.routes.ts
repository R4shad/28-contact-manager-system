import { Router } from 'express'
import {
  getContacts,
  postContact,
  editContact,
  deleteContact,
} from '../controllers/contact.controllers'

export const contactRoutes = Router()

contactRoutes.get('/', getContacts)

contactRoutes.post('/', postContact)

contactRoutes.put('/:id', editContact)

contactRoutes.delete('/:id', deleteContact)
