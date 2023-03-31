import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const DATA_URL = "http://localhost:8020/show/"

const getShow = () => {

    const [show, setShow] = useState([])
    const [searchParams] = useSearchParams()
    const token = searchParams.get("r")
    useEffect(() => {
        const fetchShow = async () => {
            const result = await axios.get(DATA_URL + token)
            setShow(result.data)
        }
        fetchShow()
    }, [token])
    return show
}

export default getShow