'use client'
import React, { useState, FormEvent } from 'react'

const AddCustomer = () => {

    const [ postComplete, setPostComplete ] = useState(false)

    async function handleNewCustomerSubmit(event: FormEvent<HTMLFormElement>){
        event?.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData?.get('username')
        const pass = formData?.get('password')
        const first = formData.get('firstName')
        const last = formData.get('lastName')
        const address = formData.get('address')
        const phone = formData.get('phoneNumber')

        const res = await fetch('/api/customers/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: name,
                                 password: pass,
                                 firstName: first,
                                 lastName: last,
                                 address: address,
                                 phoneNumber: phone,
          }),
        })

        if(res.statusText != "OK"){
            return "error"
        } else{
            setPostComplete(true);
            //const newUser = await res.json();
            //console.log("new user created: ", newUser)
        }
    }

    if(postComplete){
        return (
            <div>
                <div>-----------------------</div>
                <h3>Add a New Customer:</h3>

                <form onSubmit={handleNewCustomerSubmit}>
                <input type="username" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="text" name="firstName" placeholder="First Name" required />
                    <input type="text" name="lastName" placeholder="Last Name" required/>
                    <input type="text" name="address" placeholder="Address" required/>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" required/>
                    <button type="submit">Add</button>
                </form>

                <h1>customer added successfully!</h1>
            </div>
        )
    } else {
        return (
            <div>
                <div>-----------------------</div>
                <h3>Add a New Customer:</h3>

                <form onSubmit={handleNewCustomerSubmit}>
                    <input type="username" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="text" name="firstName" placeholder="First Name" required />
                    <input type="text" name="lastName" placeholder="Last Name" required/>
                    <input type="text" name="address" placeholder="Address" required/>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" required/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddCustomer