import React, { createContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {AccountTool} from "./accountTool"
import { AccountContext } from "./context";
import { MutedLink } from "./common";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`;

const SmallText = styled.h5`
  font-weight: 500;
  color: #000;
  z-index: 10;
  margin: 0;
  font-size: 13px;
  line-height: 1.24;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`;




export function AccountForm(props) {
  return (
    <AccountContext.Provider>
      <BoxContainer>
        <TopContainer>
            <HeaderContainer>
            </HeaderContainer>
            <font size = "5">Account Information</font>
        </TopContainer>
        <InnerContainer>
          <AccountTool />     
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
