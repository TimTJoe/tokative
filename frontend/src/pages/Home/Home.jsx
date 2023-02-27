import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import withAuth from '@contexts/withAuth'
import useData from "@hooks/useData"
// import useLogout from '@hooks/useLogout'

import useLogout from "@pages/account/Logout"

function Home() {
    const location = useLocation()
    const { isAuth } = useContext(withAuth)
    const user = useData();
    const handleLogout = useLogout()

    return (

        <div>
            {
                isAuth ? (<small> {user.fullname} | </small> )
                    : (<Link to={"/login"}> log in | </Link>)
            }
            <Link to="/signup"> Signup </Link> |
            <Link to="/station"> Station</Link> |
            <Link to="" onClick={handleLogout}> Log out</Link>
            {console.log(JSON.stringify({user, isAuth}), )}
        </div>
    )
}

export default Home