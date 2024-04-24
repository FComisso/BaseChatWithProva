import React, { useEffect, useState } from "react"
import "./Login.css"
import { login } from "../utils/comunication";
import { FaRedoAlt } from 'react-icons/fa';
const Login = ({onLogin}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     setError(false)
    // }, [username, password])

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 3000)
    }, [error])

    const submit = () => {
    
        setLoading(true)
        login(username, password).then((response) => {
            setLoading(false)
            if(response){
                onLogin()
            }
            else{
                setError(true)
            }
        })
    }

    return (
        <div className="login_container">
            <input 
           FaRedoAlt     type="text" 
                name="username" 
                placeholder="Username"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        submit()
                    }
                }}
                />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        submit()
                    }
                }}
                />
            {error && <p className="error">Username or password incorrect!</p>}
            <button
                className="login_button"
                onClick={submit}
                disabled={loading}
                >
                {loading ? 
                    <FaRedoAlt className="loading_icon" />
                 : 
                 "Login"}
                </button>
        </div>
    )
}

export default Login;