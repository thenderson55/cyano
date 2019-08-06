import React from 'react'
import styled from 'styled-components'

export default function Card(props) {

  const CardWrapper = styled.div`
  `

  return (
    <CardWrapper>
      {props.print.name}
    </CardWrapper>
  )
}
