import React from "react";
import MainHeader from "./MainHeader";
import SignUpCard from "./SignUpCard";
import LinksCard from "./LinksCard";
import MainFooter from "./MainFooter";

export default function Main() {
  return (
    <>
      <MainHeader />
      <SignUpCard />
      <LinksCard />
      <MainFooter />
    </>
  );
}
