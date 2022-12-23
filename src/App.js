import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchPopup from "./components/SearchPopup";
import SlideNav from "./components/SlideNav";

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isHamMenuActive, setIsHamMenuActive] = useState(false);

  const searchClicked = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  const searchCancelled = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  const hamMenuClicked = () => {
    setIsHamMenuActive((prevState) => !prevState);
  };

  const hamMenuCancelled = () => {
    setIsHamMenuActive((prevState) => !prevState);
  };

  return (
    <div className="App">
      <SearchPopup
        isSearchActive={isSearchActive}
        searchCancelled={searchCancelled}
      />
      <SlideNav
        isHamMenuActive={isHamMenuActive}
        hamMenuCancelled={hamMenuCancelled}
      />
      <Header searchClicked={searchClicked} hamMenuClicked={hamMenuClicked} />
      <Main searchClicked={searchClicked} />
      <Footer />
    </div>
  );
}

export default App;
