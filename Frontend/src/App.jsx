import './App.css'

import UserList from './components/UserList'
import AddUser from './components/AddUser'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add-user" element={<AddUser />} />
    </Routes>
    </>
  )
}

export default App
