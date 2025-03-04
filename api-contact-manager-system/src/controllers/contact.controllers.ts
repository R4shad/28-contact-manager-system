import { Request, Response } from 'express'
import { Contact } from './../models/Contact.model'
import { Op } from 'sequelize'

export const getContacts = async (req: Request, res: Response) => {
  try {
    const { search } = req.query
    console.log(search)
    if (search) {
      const contacts = await Contact.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${search}%` } },
            { email: { [Op.like]: `%${search}%` } },
          ],
        },
      })
      if (contacts.length === 0) {
        res
          .status(404)
          .json({ message: 'No contacts found matching the search criteria' })
      } else {
        res.status(200).json(contacts)
      }
    } else {
      const Contacts = await Contact.findAll()
      const status = 200
      res.status(status).json(Contacts)
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const postContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
      res
        .status(400)
        .json({ message: 'Name and Email, and Phone are required' })
    } else {
      const createdContact = await Contact.create({ name, email, phone })
      res.status(201).json(createdContact)
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error 2', error })
  }
}

export const editContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body
    const { id } = req.params
    if (!name && !email && !phone) {
      res.status(400).json({ message: 'No value to edit' })
    } else {
      const contact = await Contact.findByPk(id)
      if (!contact) {
        res.status(404).json({ message: 'Contact not found' })
      } else {
        // Actualizar los datos del contacto
        contact.name = name || contact.name
        contact.email = email || contact.email
        contact.phone = phone || contact.phone
        await contact.save()
        res.status(200).json({ contact })
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const contactToDelete = await Contact.findByPk(id)
    if (!contactToDelete) {
      res.status(404).json({ message: 'Contact not found' })
    } else {
      const contact = contactToDelete
      await contactToDelete.destroy()
      res.status(200).json({ contact })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}
