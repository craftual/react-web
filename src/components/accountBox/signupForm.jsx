import React, { useContext, useState } from "react";
import Axios from "axios";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () =>{
    Axios.post("http://localhost8080/user/signIn", {
      username: nameReg,
      email: emailReg,
      password: passwordReg
    })
    console.log(nameReg);
    console.log(emailReg);
    console.log(passwordReg);
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Full Name" onChange={(e)=>{setNameReg(e.target.value)}}/>
        <Input placeholder="Email" onChange={(e)=>{setEmailReg(e.target.value)}}/>
        <Input type="password" placeholder="Password" onChange={(e)=>{setPasswordReg(e.target.value)}}/>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={register}>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
