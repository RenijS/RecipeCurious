import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchPopup from "./components/SearchPopup";

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const searchClicked = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  const searchCancelled = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  return (
    <div className="App">
      <SearchPopup
        isSearchActive={isSearchActive}
        searchCancelled={searchCancelled}
      />
      <Header searchClicked={searchClicked} />
      <Main searchClicked={searchClicked} />
      <Footer />
    </div>
  );
}

export default App;
