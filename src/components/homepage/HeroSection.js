import React from "react"
import { Link } from "gatsby"

import { Button, Container, Text, Div, Icon, Anchor } from "atomize"

import FollowCard from "./uicomponents/FollowCard"
import UserEdit from "./uicomponents/UserEdit"
import Buttons from "./uicomponents/Buttons"
import CardComponent from "./uicomponents/CardComponent"
import LoginForm from "./uicomponents/LoginForm"

// import Notification from './uicomponents/Notification'
class HeroSection extends React.Component {
  render() {
    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "11rem" } }}>
          <Container d="flex" flexDir="column" align="center" background>
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              Layer 2 Governance Launchpad
            </Text>
            <Text
              tag="h2"
              textWeight="400"
              maxW="42rem"
              textSize="subheader"
              textAlign="center"
              fontFamily="secondary"
              textColor="medium"
              m={{ b: "2.5rem" }}
            >
              We enable fast and cheap governance for your DAO or DEFI project.
            </Text>
            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
            >
              <Link to="https://calendly.com/deora_earth/intro?month=2020-07" target="_blank">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="brand"
                  hoverBg="brand4"
                  rounded="lg"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  Get in touch
                </Button>
              </Link>
              <Anchor
                href="https://www.youtube.com/embed/jcbs2CsoLqg?start=2430"
                target="_blank"
              >
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="gray200"
                  border="1px solid"
                  borderColor="gray400"
                  hoverBorderColor="gray600"
                  rounded="lg"
                  p={{ l: "0.5rem", r: "1rem" }}
                  textColor="medium"
                >
                   Support
                </Button>
              </Anchor>
            </Div>
          </Container>
        </Div>
        {/*
        <Div
          tag="section"
          w="100vw"
          p={{ t: { xs: "3rem", md: "6rem" } }}
          overflow="hidden"
        >
          <Container>
            <Div
              d="flex"
              justify="center"
              p={{ b: "10.5rem" }}
              border={{ b: "1px solid" }}
              borderColor="gray300"
            >
              <Div
                minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                d="flex"
                align="center"
                flexDir="column"
                h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                pos="relative"
              >
                <Buttons />

                <FollowCard />

                <CardComponent />

                <Notification />

                <LoginForm />

                <UserEdit />
              </Div>
            </Div>
          </Container>
        </Div>
        */}
      </>
    )
  }
}

export default HeroSection
