import React from 'react'
import useStation from '@hooks/useStation'
import useTitle from '@hooks/useTitle'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import useData from "@hooks/useData"


function Studio() {
    const frequency = useParams().frequency
    const station = useStation()
    const { user } = useData()
    const navigate = useNavigate()
    const location = useLocation()
    useTitle(`Studio - ${station?.name}`)
    console.log(user)

  return (
    <div>Welcome to the studio: {frequency}</div>
  )
}

export default Studio