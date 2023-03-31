import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom"
import withAuth from '@contexts/withAuth'
import useUser from "@hooks/useUser"
import getStations from "@helpers/getStations"
import getShows from "@helpers/getShows"
import useLogout from "@pages/account/Logout"
import styled from "styled-components"
import Navigation from '@components/navigation'
import MuiContainer from '@mui/material/Container'
import CreateShow from './components/CreateShow'
import ShowCard from './components/ShowCard'

const Main = styled.div`
    && {
        min-height: 99vh;
        background-color: #F0F2F5;
    }
`

const Container = styled(MuiContainer)`
    && {
        padding: 4px;
    }
`
const ShowsGrid = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

function Home() {

    const location = useLocation()
    const { isAuth } = useContext(withAuth)
    const user = useUser();
    const AllStations = getStations()
    const AllShows = getShows()
    const handleLogout = useLogout()
    const navigate = useNavigate()

    return (
        <Main>
            <Navigation />
            <Container maxWidth="sm" disableGutters>
                <CreateShow />
                <ShowsGrid>
                    {
                        AllShows ?
                            AllShows.map((show, key) => (
                                <ShowCard
                                    name={show.name}
                                    user_uuid={show.user_uuid}
                                    avatar={show.avatar}
                                    about={show.about}
                                    token={show.token}
                                    key={key}
                                    onClick={() => {
                                        navigate(`/show?r=${show.token}`)
                                    }}
                                />
                            )) : "No Show..."
                    }
                </ShowsGrid>
            </Container>
        </Main>
    )
}

export default Home