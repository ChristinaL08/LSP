import React from 'react'
import styled from "styled-components"

function Section({ title, description, backgroundImg, lBtnText, rBtnText }) {

    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1> {title} </h1>
                <br/>
                <p> {description} </p>
            </ItemText>
            <Buttons>
                <ButtonG>
                    <LButton>
                        {lBtnText}
                    </LButton>
                    <RButton>
                        {rBtnText}
                    </RButton>
                </ButtonG>
                <Down src="/images/down.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
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
background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 10vh;
text-align: centre;
color: white;
width: 1000px;
`

const ButtonG = styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const LButton = styled.div`
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

const Down = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`