import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function SideBarOption(props) {
  const Icon = props.Icon;
  const title = props.title;
  const className = props.className;
  const sideBarRef = useRef();
  const href = props.href;
  return (
    <Button
      onClick={() => {
        sideBarRef.current.click();
      }}
      className={className}
      startIcon={Icon && <Icon />}
    >
      <Link ref={sideBarRef} to={href} />
      {title}
    </Button>
  );
}

export default SideBarOption;
