import React, { useContext, useState } from "react";
import Axios from "axios";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  ChangeButton,
} from "./common";
import { AccountContext } from "./context";

export function AccountTool(props) {
  const[passCh, setPassCh] = useState("");

  const change = () =>{
    Axios.post("http://localhost:8080/user/signUp", {
      email: props.location.state.email,
      password: passCh
    })
    
    console.log(props.location.state.email)
    console.log(passCh)
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="new password" onChange={(e)=>{setPassCh(e.target.value)}}/>
        <Input placeholder="new password(again)" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <ChangeButton onClick={change}>Change Password</ChangeButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
      </MutedLink>
    </BoxContainer>
  );
}
