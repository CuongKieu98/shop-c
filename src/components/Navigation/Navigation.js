import React, { useState, useContext } from "react";
import "./Navigation.scss";
import { Avatar, Button } from "@mui/material";
import Brand from "../Brand/Brand";
import SearchBar from "../SearchBar/SearchBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Navigation() {
  const [isLanguageListOpen, setLangList] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);

  function handleOpenLanguageList() {
    if (isOpenProfile === true) setOpenProfile(!isOpenProfile);
    setLangList(!isLanguageListOpen);
  }
  function handleOpenProfile() {
    if (isLanguageListOpen === true) setLangList(!isLanguageListOpen);
    setOpenProfile(!isOpenProfile);
  }
  //const useStyle = useContext(ThemeContext);
  return (
    <nav>
      <Brand />
      <div className={"navigation"}>
      </div>
      <SearchBar />
      <div className={"language"} onClick={handleOpenLanguageList}>
        <Button
          className={"Dropdown-btn"}
          endIcon={isLanguageListOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        >
          <div className="wrapper">
            <p>Music Languages</p>
          </div>
        </Button>
        {/* {
                    isLanguageListOpen
                    &&
                    <DropDownLanguageList/>
                } */}
      </div>
      <div className="profile" onClick={handleOpenProfile}>
        <Button
          className={"Dropdown-btn"}
          startIcon={
            <Avatar style={{ width: "30px", height: "30px", padding: "18px" }}>
              VS
            </Avatar>
          }
          endIcon={isOpenProfile ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        ></Button>
        {/* {
                    isOpenProfile &&
                    <DropDownProfile/>
                } */}
      </div>
    </nav>
  );
}

export default Navigation;
