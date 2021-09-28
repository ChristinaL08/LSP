import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>

            <Section title='Lloyds Banking' description='Llyods Bank have a range of insurance products & policies to offer you protection should unforeseen events occur.  We are here to protect the things that matter to you.'
                backgroundImg='dc.jpg'
                lBtnText='Get a quote'
                rBtnText='Find out more'
            />

            <Section title='Health Insurance' description='some text'
                backgroundImg='om.jpg'
                lBtnText='Get a quote'
                rBtnText='Find out more'
            />

            <Section title='Critical Health Insurance' description='some text'
                backgroundImg='hc.jpg'
                lBtnText='Get a quote'
                rBtnText='Find out more'
            />


        </Container>
    )
}

export default Home

const Container = styled.div`
            height: 100vh;
            `
