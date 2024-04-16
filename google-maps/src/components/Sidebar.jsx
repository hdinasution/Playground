import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar" style={{ width: open ? "200px" : "50px" }}>
      <div className="header">
        <h1 className="logo" style={{ display: open ? "block" : "none" }}>
          Logo
        </h1>
        <div
          className="bars"
          style={{ marginLeft: open ? "50px" : "0px" }}
          onClick={() => setOpen(!open)}
        >
          <FaIcons.FaBars />
        </div>
      </div>
      {SidebarData.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => (isActive ? "active" : "link")}
        >
          <div className="icon">{item.icon}</div>
          <div
            className="link_tex"
            style={{ display: open ? "block" : "none" }}
          >
            {item.title}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
