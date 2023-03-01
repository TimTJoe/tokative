import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import withAuth from '@contexts/withAuth'
import useData from "@hooks/useData"
import useStation from "@hooks/useStation"
import getStations from "@helpers/getStations"

// import useLogout from '@hooks/useLogout'

import useLogout from "@pages/account/Logout"

function Home() {
    const location = useLocation()
    const { isAuth } = useContext(withAuth)
    const user = useData();
    // const station = useStation()
    const AllStations = getStations()
    const handleLogout = useLogout()
    // const sname = station ? station.station.name : "No station"

    return (

        <div style={{ textAlign: 'center' }}>
            {
                user.uuid ?
                    <p>
                        {user.fullname} <br />
                        <Link to="/new/station"> New Station</Link> <br />
                        <Link onClick={handleLogout} to="/logout"> Logout </Link>
                    </p>
                    :
                    <p>
                        <Link to={"/login"}> Log In  </Link> <br />
                        <Link to="/signup"> Signup </Link>
                    </p>
            }
            {
                AllStations ?
                    <small> Station list <br/>
                        {AllStations.map((item, key) => (
                            <Link 
                            to={`/${item.frequency}`} key={key} 
                            state={{station: item}}> {item.name}<br/>
                            </Link>
                        ))}
                    </small>
                    :
                    <p>
                        No Station exist.
                    </p>
            }

            {console.log(JSON.stringify({ user, isAuth, AllStations }),)}
        </div>
    )
}

export default Home