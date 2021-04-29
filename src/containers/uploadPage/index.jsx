import React from "react";
import styled from "styled-components";
import { UploadBox } from "../../components/uploadBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function UploadPage(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar />
      <StyledInnerContainer>
        <UploadBox initialActive={action} />
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}