import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import UserContext from '@contexts/UserDetails'
import Logout from "@pages/account/Logout"
function Home() {
    const location = useLocation()
    const { isAuth, profile } = useContext(UserContext)

    return (

        <div>
            <Link to="/signup">Signup</Link>
            <br />
            { isAuth && <Link to="/new">new</Link>}
            <br />
            <Link to="/new/station">new station</Link>
            <Logout />
            {
                profile && <h1>Welcome {profile.fullname} - {profile.uuid}</h1>
            }
        </div>
    )
}

export default Home