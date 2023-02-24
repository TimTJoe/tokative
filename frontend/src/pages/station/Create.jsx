import React, { useState, useEffect, useRef, useContext } from 'react'
import { useForm } from "react-hook-form"
import { Link, Typography, Divider, Slide, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import useTitle from "@hooks/useTitle"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import styled from 'styled-components';

import Body from "@components/form/Body"
import FormBox from "@components/form/FormBox"
import Header from "@components/form/Header"
import Input from "@components/form/Input"
import Button from "@components/form/Button"
import Sheet from "@components/form/Sheet"
import Pattern from '@components/form/Pattern';
import Textarea from '@components/form/Textarea';

import UserContext from '@contexts/UserDetails';

const STATION_URI = "http://localhost:8020/station";

function Station() {
  useTitle("Tokative - Create a New Station")
  const location = useLocation()
  const {isAuth, profile} = useContext(UserContext)
  // const user = location.state?.user || null;
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)
  const [slideIn, setSlideIn] = useState(false)
  const slideRef = useRef(null)
  const navigate = useNavigate()

  function handleOnFocus() { setDisable(false) }

  useEffect(() => {
    setSlideIn(true)
  }, [])

  const [values, setValues] = useState({
    station:  "",
    frequency: "",
    bio: "",
    owner: profile?.uuid || ""
  })

  const { setError, register, handleSubmit, formState: { errors } } = useForm()
  const handleErrors = (errors) => { }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleCreation = async () =>  {
    setDisable(true)
    setLoading(true)
    try {
      const response = await axios.post(STATION_URI, values);
      const data = response.data;
      const {success, station} = data;
      
      if(!success) {
        throw {
          message: data.message,
          name: data.name
        }
      }

      navigate("/", { state: { station }})

    } catch(error) {
      setDisable(false)
    setLoading(false)
      if(error.message) {
        setError(error.name, {message: error.message})
      }
    }

  }

  return (
    <Body>
      <Sheet>
        <Header
          headline="Create a Station"
          tagline="Your own dedicated internet radio station" />
        <FormBox
          method="POST"
          onSubmit={handleSubmit(handleCreation, handleErrors)}
        >
          <Input
            autoFocus
            label="Station Name"
            placeholder="HOTT FM"
            name="station"
            type="text"
            value={values.station}
            onFocus={handleOnFocus}
            {...register("station", Pattern.station)}
            error={Boolean(errors.station)}
            helperText={errors.station?.message}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <Input
            label="Frequency"
            placeholder="107.9"
            name="frequency"
            type="text"
            value={values.frequency}
            onFocus={handleOnFocus}
            {...register("frequency", Pattern.frequency)}
            error={Boolean(errors.frequency)}
            helperText={errors.frequency?.message}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <Textarea
            label="About Station"
            placeholder={USER.uuid}
            name="bio"
            type="text"
            value={values.bio}
            onFocus={handleOnFocus}
            {...register("bio", Pattern.bio)}
            error={Boolean(errors.bio)}
            helperText={errors.bio?.message}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            multiline
          />

          <Button
            type="submit"
            color="primary"
            variant='contained'
            disableElevation
            disabled={disable}
          > Create Station </Button>

        </FormBox>

      </Sheet>
    </Body>
  )
}

export default Station