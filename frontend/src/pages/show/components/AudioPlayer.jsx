import React, { useContext } from 'react'
import withShow from '@contexts/withShow'

const audio = new Audio()
function AudioPlayer() {
    const { stream } = useContext(withShow)
    return (<>Music player </>)
}

export default AudioPlayer