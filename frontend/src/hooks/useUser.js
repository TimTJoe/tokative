import React, {useState, useEffect, createContext} from "react"
import axios from "axios"
import {useLocation} from "react-router-dom"
const DATA_URL = "http://localhost:8020/user"

const useUser = () => {
    const [user, setUser] = useState([])
    const location = useLocation()

    useEffect(() => {
            //fetch logged in user from db
            const fetchData = async () => {
                const result = await axios.get(DATA_URL)
                setUser(result.data)
            }
            fetchData()
    }, [location])
    return user
}

export default useUser