import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Card({print}) {

  const CardWrapper = styled.div`
  `

  return (
    <CardWrapper>
      <Link to={`/gallery/${print.id}`}>
        {print.description}
      </Link>
    </CardWrapper>
  )
}
