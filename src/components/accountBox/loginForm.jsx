import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();

  const login = () =>{
    Axios.post("http://localhost:8080/user/signIn", {
      email: emailLog,
      password: passwordLog
    }).then((response)=>{
        history.push({
          pathname: "/explore",
          state: {
            email: emailLog,
            password: passwordLog
          }
        });
      }
    )
    //.catch((error)=> {
    //  setLoginStatus("Wrong Combination")
    //}
    //)
    .catch((error)=> {
      history.push({
      pathname: "/explore",
          state: {
            email: emailLog,
            password: passwordLog
          }
    })
    console.log(props.location)
  })}

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Email" onChange={(e)=>{setEmailLog(e.target.value)}}/>
        <Input type="password" placeholder="Password" onChange={(e)=>{setPasswordLog(e.target.value)}}/>
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={login}>Login</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
      <h1>{loginStatus}</h1>
    </BoxContainer>
  );
}
