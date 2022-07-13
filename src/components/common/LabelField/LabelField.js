import React from "react";
import "react-bootstrap-icons";

function LabelField({ title, setIcon }) {
  let Icon = setIcon;
  return (
    <div>
      <a href="#">
        <span className="icon-nav">
          <Icon className="icon-bs" />
        </span>
        <span className="title-nav">{title}</span>
      </a>
    </div>
  );
}

export default LabelField;
