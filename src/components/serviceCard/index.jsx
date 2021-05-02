import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/homePage.webp";
import img2 from "../../images/img5.jpg";
import img3 from "../../images/images.jfif";
import img4 from "../../images/download.jfif";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  color: #ebe204;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  margin-left: 3px;
  color: #2ba679;
  font-weight: 700;
`;

const StartingAtText = styled.h6`
  margin: 0;
  color: rgb(161, 161, 161);
  font-weight: 400;
`;

export function ServiceCard(props) {
  const { thumbnailUrl, specialist, id, title, rate, rating } = props;

  return (
    <ContentContainer>
    <CardContainer>
      <TopContainer>
        <Title>Architecture</Title>
        <ServiceThumbnail>
          <img src={img1} alt={title} />
        </ServiceThumbnail>
        <Marginer direction="vertical" margin="1em" />
      </TopContainer>
      <Link to="/services">
            <Button>Inspect</Button>
      </Link>
    </CardContainer>

    <CardContainer>
      <TopContainer>
        <Title>Game Character</Title>
        <ServiceThumbnail>
          <img src={img2} alt={title} />
        </ServiceThumbnail>
        <Marginer direction="vertical" margin="1em" />
      </TopContainer>
      <Link to="/services">
            <Button>Inspect</Button>
      </Link>
    </CardContainer>
    <CardContainer>
      <TopContainer>
        <Title>Game Character</Title>
        <ServiceThumbnail>
          <img src={img3} alt={title} />
        </ServiceThumbnail>
        <Marginer direction="vertical" margin="1em" />
      </TopContainer>
      <Link to="/services">
            <Button>Inspect</Button>
      </Link>
    </CardContainer>
    <CardContainer>
      <TopContainer>
        <Title>Object</Title>
        <ServiceThumbnail>
          <img src={img4} alt={title} />
        </ServiceThumbnail>
        <Marginer direction="vertical" margin="1em" />
      </TopContainer>
      <Link to="/services">
            <Button>Inspect</Button>
      </Link>
    </CardContainer>
    </ContentContainer>

    
  );
}
