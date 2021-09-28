import React from 'react'
import styled from "styled-components"

function Section() {
    
    return (
        <Wrap>
          <ItemText>
              <h1> Lloyds Banking </h1>
              <p> Llyods Bank have a range of insurance products & policies to offer you protection should unforeseen events occur.
                  <br/>
              We are here to protect the things that matter to you.</p>
              </ItemText> 
              <Buttons>
              <ButtonG>
                  <LButton>
                    Get a quote
                  </LButton>
                  <RButton>
                     Find out more
                  </RButton>
              </ButtonG>
              </Buttons>
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
background-image: url('/images/g.jpg');
display: flex;
flex-direction: column;
justify-content: space-between; // vertical
align-items: center; // horizontal
`

const ItemText = styled.div `
padding-top: 15vh;
text-align: centre;
`

const ButtonG = styled.div `
display: flex;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const LButton = styled.div `
background-color: white;
height: 40px;
width: 200px;
color: black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
margin: 8px;
`
const RButton = styled(LButton)`
background-color: white;
opacity: 0.65;
color: black;
`
const Buttons = styled.div `
`