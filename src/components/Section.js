import React from 'react'
import styled from "styled-components"

function Section() {
    
    return (
        <Wrap>
          <ItemText>
              <h1> Lloyds Banking </h1>
              <p> Llyods Bank have a range of insurance products &  policies to offer you protection should unforeseen events occur.
              We are here to protect the things that matter to you.</p>
              </ItemText> 
        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
width: 100vw;
height: 100vh;
background-size: cover;
background-position: centre;
background-repeat: no-repeat;
background-image: url('/images/dc.jpg');
display: flex;
flex-direction: column;
justify-content: space-between; // vertical
align-items: center; // horizontal
`

const ItemText = styled.div `
padding-top: 15vh;
text-align: centre;
`