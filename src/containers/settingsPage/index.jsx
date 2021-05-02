import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AccountForm } from "../../components/accountForm";
import { Footer } from "../../components/footer";
import { Navbar2 } from "../../components/navbar2";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "../../components/accountBox/common";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;



export function SettingsPage(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar2 />
      <StyledInnerContainer>
        <h2>Account Information</h2>
        email: {props.location.state.email}<hr></hr>
        password: {props.location.state.password}
        <FormContainer>
        <Input placeholder="Email"/>
        <Input type="password"/>
        </FormContainer>
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}