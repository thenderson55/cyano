import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom'


export default function CardDetail({ match }) {

  // Destructure the params data named as 'id' from route given in App using the match from props
  const {
    params: { id }
  } = match;
  
  const [print, setPrint] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(false)
      try {
        const result = await axios(`http://localhost:5000/print/${id}`);
        console.log(result.data)
        setPrint(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false)
    }
    fetchData();
  }, [id]);

  const CardWrapper = styled.div``;

  return (
    
    <CardWrapper>
      Hello
      {print && <div>{print.name}</div>}
    </CardWrapper>
  )
}
