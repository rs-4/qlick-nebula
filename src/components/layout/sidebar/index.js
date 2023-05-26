import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChartBar,
  faCog,
  faTimes,
  faHouse,
  faChartArea,
  faChartColumn,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import "../../../App.css";

library.add(faHome, faChartBar, faCog, faTimes, faHouse);

const LogoApp = styled.img`
  width: 40px;
  margin: 20px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.isCollapsed ? "80px" : "250px")};
  background-color: #005af0;
  z-index: 1000;
  font-family: "Poppins", sans-serif;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  font-size: 24px;
  font-weight: 600;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const NavItem = styled.div`
  margin: 3px 10px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isCollapsed ? "center" : "flex-start")};
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

const Icon = styled.i`
  flex: ${(props) => (props.isCollapsed ? "1" : "0")};
  margin-right: ${(props) => (props.isCollapsed ? "0" : "12px")};
  font-size: 20px;
  text-align: center;
`;

const Text = styled.span`
  flex: 1;
`;

const TitleSidebard = styled.h2`
  flex: 1;
  text-align: center;
  color: #fff;
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: ${(props) =>
    props.isCollapsed ? "center" : "space-evenly"};
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 24px;
  left: 0;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    div {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
  }
`;

const LabelItem = styled.div`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  opacity: 0.7;
`;

const Separator = styled.div`
  color: #fff;
`;

const SidebarComponent = ({ isCollapsed, setIsCollapsed }) => {
  const navItems = [
    {
      id: 1,
      icon: faHome,
      text: "Home",
      path: "default",
    },
    { id: 2, icon: faChartColumn, text: "Statistics", path: "statistics" },
    { id: 3, icon: faTable, text: "Table", path: "table" },
    { id: 4, icon: faChartArea, text: "Charts", path: "charts" },
  ];

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sidebar isCollapsed={isCollapsed}>
      <Logo isCollapsed={isCollapsed} onClick={handleToggleSidebar}>
        {isCollapsed ? (
          <TitleSidebard>🐦🔥</TitleSidebard>
        ) : (
          <>
            <TitleSidebard>Hra - 🐦🔥</TitleSidebard>
          </>
        )}
      </Logo>
      {!isCollapsed && (
        <>
          <Separator />
          <LabelItem>Menu</LabelItem>
          <Separator />
        </>
      )}
      {navItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <StyledNavLink
            to={item.path}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <NavItem isCollapsed={isCollapsed}>
              <Icon isCollapsed={isCollapsed}>
                <FontAwesomeIcon size={"xs"} icon={item.icon} />
              </Icon>
              {!isCollapsed && <Text>{item.text}</Text>}
            </NavItem>
          </StyledNavLink>
        </React.Fragment>
      ))}
      <LogoutButton onClick={handleToggleSidebar}>
        {isCollapsed ? <> &gt;&gt;</> : <>&lt;&lt; </>}
      </LogoutButton>
    </Sidebar>
  );
};

export default SidebarComponent;
