import { useState } from "react"
import { UseForm } from "../hooks/UseForm"

export const FormularioComponent = () => {

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const { formState, userName, email, password, onInputChange } = UseForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        console.log(formState.userName.trim())
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName">Username</label>
                <input
                    type="userName"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your Username"
                    value={userName}
                    onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter a password"
                    value={password}
                    onChange={onInputChange}></input>
            </div>

            <button
                type="submit"
                className="btn btn-primary">Submit</button>
        </form>
    )
}
