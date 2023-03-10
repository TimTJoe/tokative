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
import { createBrowserHistory } from "history";

const DATA_URL = "http://localhost:8020/show";

function Create() {
  useTitle("Tokative - Create a New Talk Show")
  const [values, setValues] = useState({
    name: "",
    about: "",
  })
  const location = useLocation()
  const history = createBrowserHistory()
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)
  const navigate = useNavigate()

  function handleOnFocus() {
    setDisable(false)
    setLoading(false)
  }

  const { setError, register, handleSubmit, formState: { errors } } = useForm()
  const handleErrors = (errors) => { }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleCreation = async () => {
    setDisable(true)
    setLoading(true)
    try {
      const response = await axios.post(DATA_URL, values);
      const data = response.data;
      const { show } = data;
      console.log(data)
      // navigate(`/show?r=${show.token}`, { state: { show: show } })
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
          headline="Create a Talk Show"
          tagline="Share ideas. Discuss what matters." />
        <FormBox
          method="POST"
          onSubmit={handleSubmit(handleCreation, handleErrors)}
        >
          <Input
            autoFocus
            label="Talk Show Name"
            name="name"
            type="text"
            value={values.name}
            onFocus={handleOnFocus}
            {...register("name", Pattern.name)}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          
          <Textarea
            label="Description"
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
              onClick={() => { history.back() }}
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