import React from 'react'
import { TwitterPicker } from 'react-color';

const ColorPicker = ({handleColorChange}) => {
return(
    <TwitterPicker 
    colors = {['#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'] }
    onChange = {handleColorChange}
    triangle = {"hide"}
    width='235px'
    />
)
}

export default ColorPicker