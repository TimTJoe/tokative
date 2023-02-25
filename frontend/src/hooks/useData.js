import React, {useState, useEffect, createContext} from "react"
import axios from "axios"
import {useLocation} from "react-router-dom"
const DATA_URL = "http://localhost:8020/user/"

/**
 * Use logged in user data
 * 
 * @returns {Array} data
 * 
 */

const useData = () => {
    const [data, setData] = useState([])
    const location = useLocation()

    useEffect(() => {
        //check for logged user
        const loggedInUser = localStorage.getItem("user")
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setData(foundUser)
        }
        //fetch user from db
        const fetchData = async () => {
            const result = await axios.get(DATA_URL)
            setData(result.data)
        }
        fetchData()
    }, [location])
    return data
}

export default useData