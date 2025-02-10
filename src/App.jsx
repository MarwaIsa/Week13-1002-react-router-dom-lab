import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import NavBar from './component/NavBar'
import MailboxList from './component/MailboxList'
import MailboxForm from './component/MailboxForm'
import MailboxDetails from './component/MailboxDetails'

const App = () => {
  // Create a state variable called mailboxes and initialize it with an empty array
  const [mailboxes,setMailboxes] = useState([]);
  return (

    <>
      <NavBar></NavBar>
      <Routes>
            <Route path="/" element={<main><h1>Post Office</h1></main>}></Route>
            <Route path="/mailboxes" element={<MailboxList/>}></Route>
            <Route path="/new-mailbox" element={<MailboxForm/>}></Route>
            <Route path="/mailboxes/:mailboxId	" element={<MailboxDetails/>}></Route>

      </Routes>
    </>
  )
};

export default App;
