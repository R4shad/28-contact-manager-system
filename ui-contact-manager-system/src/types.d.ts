export interface Contact {
  id: string
  name: string
  email: string
  phone: number
  createdAt: Date
}

export interface FromContact {
  name: string
  email: string
  phone: number
}

export const emptyContact = {
  name: '',
  email: '',
  phone: -1,
}

export interface FormErrors {
  errorName: string
  errorEmail: string
  errorPhone: string
}

export const emptyErrors = {
  errorName: '',
  errorEmail: '',
  errorPhone: '',
}
