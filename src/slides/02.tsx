import * as React from "react"
import styled, { keyframes } from "react-emotion"
import { Slide, Heading, Text, Link, Appear } from "spectacle"

const attention = keyframes`
  0% {
    color: #69171b !important;
  }
  50% {
    color: #f92b13;
  }
  100% {
    color: #69171b;
  }
`

const Hiring = styled("span")({
  fontSize: "0.7em",
  animation: `${attention} 1s ease infinite`,
  position: "absolute",
  top: "15%",
  marginLeft: "5px"
})

const RelativeText = styled(Text)({
  position: "relative"
})

const notes = `
we are hiring
`

export default (
  <Slide notes={notes} transition={["fade"]} bgColor="quarternary">
    <Heading>Hi</Heading>
    <Text textColor="primary" textSize="32px">
      I'm Kalle, Software developer from Kiel
    </Text>
    <RelativeText textColor="primary" textSize="32px">
      Working for{" "}
      <Link textColor="primary" href="https://cap3.de">
        Cap3
      </Link>
      <Appear>
        <Hiring>(we are hiring)</Hiring>
      </Appear>
    </RelativeText>
    <Text margin="50px auto" textColor="primary" textSize="24px">
      find me on twitter:{" "}
      <Link textColor="primary" href="https://twitter.com/kaoDev">
        @kaoDev
      </Link>
    </Text>
  </Slide>
)
