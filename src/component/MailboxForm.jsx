import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'

/* As a user, when viewing the form on the ‘New Mailbox’ page, I should
see a <form> with an <input> for the name of the boxOwner and a <select>
menu for the boxSize. The <select> menu should include 
three options: ‘Small’, ‘Medium’, and ‘Large’.

 */
    // step 1: create state for all form Data
    const [formData,setFormData]= useState (
        {
            boxOwner:"",
            boxSize:["Small", "Medium", "Large"]

        }
    )
    // step 2: create handleChange function for all states to change
    function handleChange(event) {
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    const navigate = useNavigate()

    // step 4: handle submit that prevents default, sends the request to API

        function handelSubmit(e) {
            e.preventDefault()
            const newMailbox = {
                boxOwner:formData.boxOwner,
                boxSize:ormData.boxOwner
            }
            console.log(newMailbox)

        }

function MailboxForm() {
  return (
    <div>
        <form action="">
    {/* step 3: create inputs for each value like the following */}

            <label htmlFor="boxOwner">Enter a BoxOwner:</label>
            <input 
                type="text" 
                name='boxOwner'
                id='boxOwner'
                value={formData.boxOwner}
                onChange={handleChange}
            />

            <label htmlFor="boxSize">Select a Box Size:</label>
            <select 
                name='boxSize'
                id='boxSize'
                value={formData.boxSize}
                onChange={handleChange}
            />
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>

            <button type="submit">Add Mailbox</button>

        </form>
    </div>

  )
}

export default MailboxForm