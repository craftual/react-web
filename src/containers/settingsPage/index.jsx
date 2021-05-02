import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AccountForm } from "../../components/accountForm";
import { Footer } from "../../components/footer";
import { Navbar2 } from "../../components/navbar2";
import { Marginer } from "../../components/marginer";
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
        <Marginer direction="vertical" margin="2em" />
        <FormContainer >
          <AccountForm initialActive={action} />
        </FormContainer>
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}