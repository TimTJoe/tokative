import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import UserContext from '@contexts/UserDetails';

function Home() {
    const location = useLocation()
    const user = location.state?.user || null;
    const {USER} = useContext(UserContext)
    return (

        <div>
            <Link to="/signup">Signup</Link>
            <br />
            <Link to="">log out</Link>
            <br />
            <Link to="/move">Move</Link>
            <br />
            <Link to="/new/station">new station</Link>
            {
                USER && <h1>Welcome {USER.fullname} - {USER.uuid}</h1>
            }
        </div>
    )
}

export default Home