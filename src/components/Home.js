import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>

            <Section title='Lloyds Banking' description='Llyods Bank have a range of insurance products & policies that offer protection should unforeseen events occur. These policies protect the things that matter to us. Lloyds life insurance policies are underwritten by Scottish Widows. Scottish widows became a part of  Lloyds Banking Group in January 2009 and have over 200 years experience protecting what matters most.'
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
