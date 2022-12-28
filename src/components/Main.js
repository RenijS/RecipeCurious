import React from "react";
import MainHeader from "./Main/MainHeader";
import SignUpCard from "./Main/SignUpCard";
import LinksCard from "./Main/LinksCard";
import MainFooter from "./Main/MainFooter";

export default function Main(props) {
  return (
    <>
      <MainHeader searchClicked={props.searchClicked} />
      <SignUpCard />
      <LinksCard />
      <MainFooter />
    </>
  );
}
