import React, { useContext, useState } from "react";
import Axios from "axios";
import { Marginer } from "../marginer";
import { useHistory } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  ChangeButton,
} from "./common";
import { AccountContext } from "./context";
import { SettingsPage } from "../../containers/settingsPage";

export function AccountTool(props) {
  const[passCh, setPassCh] = useState("");
  const history = useHistory();

 
  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="new password" onChange={(e)=>{setPassCh(e.target.value)}}/>
        <Input placeholder="new password(again)" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <ChangeButton>Change Password</ChangeButton>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}
