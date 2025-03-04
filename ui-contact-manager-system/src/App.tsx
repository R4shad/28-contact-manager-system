import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'

function App() {
  const ContactList = lazy(() => import('./components/ContactList'))
  const CreateContact = lazy(() => import('./components/CreateContact'))
  const EditContact = lazy(() => import('./components/EditContact'))

  return (
    <Router>
      <h1>Contact Manager System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Contact</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div className="spinner">🔄 Cargando...</div>}>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/edit" element={<EditContact />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
