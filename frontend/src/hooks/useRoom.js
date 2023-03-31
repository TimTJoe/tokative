import React, {useState, useEffect, createContext} from "react"
import axios from "axios"
import {useLocation} from "react-router-dom"
const DATA_URL = "http://localhost:8020/studio"

/**
 * Use logged in user data
 * 
 * @returns {Array} data
 * 
 */

const useRoom = () => {
    const [room, setRoom] = useState([])
    const location = useLocation()

    useEffect(() => {
            //fetch user from db
            const fetchData = async () => {
                const result = await axios.get(DATA_URL)
                setRoom(result.data)
            }
            fetchData()
    }, [location])
    return room
}

export default useRoom