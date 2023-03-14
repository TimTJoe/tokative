import React, { useState,  useEffect } from 'react'
import useData from '@hooks/useData'
import axios from "axios"
import {useLocation} from "react-router-dom"
const DATA_URL = "http://localhost:8020/station"

const getStations = () => {
    const [stations, setStations] = useState([])
    const location = useLocation()
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(DATA_URL)
            setStations(result.data)
        }
        fetchData()
    }, [location])
    return stations
}

export default getStations