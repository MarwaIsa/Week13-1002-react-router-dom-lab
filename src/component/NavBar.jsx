import React from 'react'
import {Link} from 'react-router'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mailboxes">Mailboxes</Link></li>
            <li><Link to="/new-mailbox">New Mailbox</Link></li>
{/*             <li><Link to="/MailboxDetails"></Link></li>*/}
        </ul>
    </div>
  )
}

export default NavBar