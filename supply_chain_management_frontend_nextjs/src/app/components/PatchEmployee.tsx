'use client'
import React, { useState, FormEvent } from 'react'

const PatchEmployee = () => {

    const [ postComplete, setPostComplete ] = useState(false)

    async function handlePatchEmployeeSubmit(event: FormEvent<HTMLFormElement>){
        event?.preventDefault()
        const formData = new FormData(event.currentTarget)
        const id = formData.get('id')
        const first = formData.get('firstName')
        const last = formData.get('lastName')
        const admin = formData.get('admin')

        //create necessary body to send to api for request
        const endpoint = `employees/patch/${id}`
        const payload = { firstName: first,
                          lastName: last,
                          admin: admin }

        const res = await fetch('/api/crud/patch', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ endpoint: endpoint,
                                 payload: payload}),
        })

        if(res.statusText != "OK"){
            return "error"
        } else{
            setPostComplete(true);
        }
    }

    if(postComplete){
        return (
            <div className="crud-items">
                <h3>Modify an Employee's Information:</h3>

                <form onSubmit={handlePatchEmployeeSubmit}>
                    <div className="fields">
                        <input type="text" name="id" placeholder="Employee ID" required/>
                        <input type="text" name="firstName" placeholder="First Name" />
                        <input type="text" name="lastName" placeholder="Last Name" />
                        <input type="text" name="admin" placeholder="Admin?"/>
                    </div>
                    <div className='submit-button'>
                        <button type="submit">Update</button>
                    </div>
                </form>

                <h1>employee data modified successfully!</h1>
            </div>
        )
    } else {
        return (
            <div className="crud-items">
                <h3>Modify an Employee's Information:</h3>

                <form onSubmit={handlePatchEmployeeSubmit}>
                    <div className="fields">
                        <input type="text" name="id" placeholder="Employee ID" required/>
                        <input type="text" name="firstName" placeholder="First Name" />
                        <input type="text" name="lastName" placeholder="Last Name"/>
                        <input type="text" name="admin" placeholder="Admin?"/>
                    </div>
                    <div className='submit-button'>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PatchEmployee