import React, { useContext } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  UploadButton,
} from "./common";
import { UploadContext } from "./context";

export function UploadTool(props) {

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Name" />
        <Input placeholder="Description" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <UploadButton>Upload</UploadButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
      </MutedLink>
    </BoxContainer>
  );
}
