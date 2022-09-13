import React from 'react'
import styled from 'styled-components'
import Sun from '../../medias/icons/Sun'
import Moon from '../../medias/icons/Moon'

export default function SwitchTheme({ color, onClick, darkTheme }) {
  return (
    <Button onClick={onClick}>{darkTheme ? <Moon color={color} /> : <Sun color={color} />}</Button>
  )
}

const Button = styled.button`
  display: flex;
  font-size: 2.4rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`
