import React, { useState, useEffect, useRef, useContext } from 'react'
import { useForm } from "react-hook-form"
import { Link, Typography, Divider, Slide, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import useTitle from "@hooks/useTitle"
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios';
import styled from 'styled-components';
// import { ArrowForward } from "@mui/icons-material"

import Body from "@components/form/Body"
import FormBox from "@components/form/FormBox"
import Header from "@components/form/Header"
import Input from "@components/form/Input"
import Button from "@components/form/Button"
import Sheet from "@components/form/Sheet"
import Pattern from '@components/form/Pattern';
import Textarea from '@components/form/Textarea';
import { ProvideUser } from '@contexts/withUser';
import withAuth from '@contexts/withAuth';
import useData from '@hooks/useData';
import Flexbox from "@components/Flexbox";

const STATION_URI = "http://localhost:8020/station";

function Create() {
  useTitle("Tokative - Create a New Station")
  const user = useData()
  const { isAuth } = useContext(withAuth);
  const [values, setValues] = useState({
    station: "",
    frequency: "",
    about: "",
  })
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)
  const [slideIn, setSlideIn] = useState(false)
  const slideRef = useRef(null)
  const navigate = useNavigate()
  // console.log({ user, values })

  function handleOnFocus() {
    setDisable(false)
    setLoading(false)
  }

  useEffect(() => {
    setSlideIn(true)
  }, [location])


  const { setError, register, handleSubmit, formState: { errors } } = useForm()
  const handleErrors = (errors) => { }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleCreation = async () => {
    setDisable(true)
    setLoading(true)
    try {
      const response = await axios.post(STATION_URI, values);
      const data = response.data;
      console.log(data)
      const { success, station } = data;
      if (!success) {
        throw {
          message: data.message,
          name: data.name
        }
      }
      navigate(`/${station.frequency}`, { state: { station } })
    } catch (error) {
      setDisable(false)
      setLoading(false)
      setError(error.name, { message: error.message })
    }
  }

  return (
    <Body>
      <Sheet>
        {loading && <LinearProgress />}

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
          // required
          />
          <Input
            label="Frequency"
            placeholder={"107.9"}
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
          // required
          />
          <Textarea
            label="About Station"
            name="about"
            type="text"
            value={values.about}
            onFocus={handleOnFocus}
            {...register("about", Pattern.about)}
            error={Boolean(errors.about)}
            helperText={errors.about?.message}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            multiline
          />

          <Flexbox>
            <Button
              variant='outlined'
              disableElevation
            // onClick={() => {location.back()}}
            // disabled={disable}
            > Cancel </Button>

            <Button
              type="submit"
              color="primary"
              variant='contained'
              disableElevation
              disabled={disable}
            // endIcon={<ArrowForward />}
            > Continue </Button>
          </Flexbox>
        </FormBox>
      </Sheet>
    </Body>
  )
}

export default Create