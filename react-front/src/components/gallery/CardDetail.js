import React from 'react'

export default function CardDetail(props) {

  const CardWrapper = styled.div`
  `

  return (
    <CardWrapper>
      {props.print.name}
    </CardWrapper>
  )
}
