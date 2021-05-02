import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar2 } from "../../components/navbar2";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Link } from "react-router-dom";
import { Button3 } from "../../components/button3";
import { deviceSize } from "../../components/responsive";
import { ServiceCard } from "../../components/serviceCard";
import { SpecialistAd } from "../../components/specialistAd";
import { Services } from "./services";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;


const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
  
`;

const RightContainer = styled.div`
  display: flex;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

export function ExplorePage(props) {
  return (
    <PageContainer>
      <Navbar2 />   
      <Marginer direction="vertical" margin="2em" />   
      <InnerPageContainer>
        <h2>Logged in as {props.location.state.email}</h2>
        <Link to={{
          pathname: "/settings",
          state:{
            email: props.location.state.email,
            password: props.location.state.password}
        }}><Button3 size={11}>Settings</Button3>
        </Link>
        <MiddleContainer>
          <LeftContainer>
              <Title>Categories</Title>
              <FLink>Architecture</FLink>
              <FLink>Landscape</FLink>
              <FLink>Humanoid</FLink>
              <FLink>Object</FLink>
          </LeftContainer>
          <Marginer direction="horizontal" margin="10em" />
          <RightContainer>
          <Marginer direction="vertical" margin="2em" />
            <ContentContainer>
              <Services />
            </ContentContainer>
          </RightContainer>
        </MiddleContainer>
      <Marginer direction="vertical" margin="10em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}