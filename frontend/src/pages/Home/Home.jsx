import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation()
    const user = location.state?.user || null;
    return (

        <div>
            <Link to="/signup">Signup</Link>
            <br />
            <Link to="">log out</Link>
            {
                user && <h1>Welcome {user.fullname}</h1>
            }
        </div>
    )
}

export default Home