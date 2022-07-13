import { useState } from "react";
import "./SideBar.scss";
import ITEM_NAV from "~/consts/ITEM_NAV";
import LabelField from "~/components/common/LabelField/LabelField";

function SideBar() {
  const [activeNav, setActiveNav] = useState("active");
  const handleClick = () => {
    activeNav === "" ? setActiveNav("active") : setActiveNav("");
  };
  let navigation = "navigation " + activeNav;
  let sidebar = "sidebar " + activeNav

  return (
    <aside className={sidebar}>
      <div className={navigation}>
        <ul>
          <li>
            <a href="#">
              <span className="icon-nav">
                {/* <Icon className="icon-bs" /> */}
              </span>
              <span className="title-nav">MUSIC</span>
            </a>
          </li>
          {ITEM_NAV.map((item) => (
            <li key={item.id}>
              <LabelField title={item.title} setIcon={item.icon} />
            </li>
          ))}
        </ul>
        <div className="toggle-nav" onClick={handleClick}></div>
      </div>
    </aside>
  );
}

export default SideBar;
