import React, { useState } from "react";
import "./NavigationBottom.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavigationBottom() {
  const [menuItems, setMenuItem] = useState([
    {
      id: 0,
      icon: <HomeOutlinedIcon />,
      href: "/home",
      label: "Home",
    },
    {
      id: 1,
      icon: <SearchIcon />,
      href: "/home/search",
      label: "Search",
    },
    {
      id: 2,
      icon: <AccountCircleOutlinedIcon />,
      href: "/home/profile",
      label: "Profile",
    },
    {
      id: 3,
      icon: <ExploreOutlinedIcon />,
      href: "/home/about",
      label: "About",
    },
  ]);
  let currPath = window.location.pathname;
  return (
    <div className="bottom-navigation">
      {menuItems.map(({ id, icon, href, label }) => (
        <Link className={"bottom-navigation-link"} key={id} to={href}>
          <Button
            className={`${
              currPath === href ? "BottomNavAction active" : "BottomNavAction"
            }`}
            style={{ borderRadius: 0 }}
          >
            {icon}
          </Button>
          <span className="label">{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default NavigationBottom;
