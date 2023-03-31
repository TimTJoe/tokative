import React, { useState, useEffect, useRef } from 'react'
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


function Station() {
  return (
      <Body>
          <Sheet>
          </Sheet> 
    </Body>
  )
}

export default Station