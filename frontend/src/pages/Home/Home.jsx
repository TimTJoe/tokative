import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import withAuth from '@contexts/withAuth'
import useData from "@hooks/useData"
import useStation from "@hooks/useStation"
// import useLogout from '@hooks/useLogout'

import useLogout from "@pages/account/Logout"

function Home() {
    const location = useLocation()
    const { isAuth } = useContext(withAuth)
    const user = useData();
    const station = useStation()
    const handleLogout = useLogout()
    // const sname = station ? station.station.name : "No station"

    return (

        <div>
            {
                isAuth ? (<small> {user.fullname} | </small> )
                    : (<Link to={"/login"}> log in | </Link>)
            }
            <Link to="/signup"> Signup </Link> |
            {

            }
            <Link to="/new/station"> New Station</Link> |
            {
                user ? (<Link onClick={handleLogout} to="/logout"> Logout </Link>) : null
            }
            |
            {
                 station ? (<Link to={`/${station.frequency}`}> {station.name} </Link>) : null}
            {console.log(JSON.stringify({user, isAuth, station}), )}
        </div>
    )
}

export default Home