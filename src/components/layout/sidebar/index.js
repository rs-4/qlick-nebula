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
  faRightFromBracket,
  faPlus,
  faDatabase,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import logoApp from "../../logo2.svg";


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
  background-color: #3d217e;
  transition: all 0.2s ease-in-out;
  z-index: 1000;
  font-family: "Poppins", sans-serif;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
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
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
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
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    div {
      background-color: rgba(255, 255, 255, 0.2);
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
      icon: faChartBar,
      text: "Statistics",
      path: "statistics",
    },
    { id: 2, icon: faCog, text: "Settings", path: "settings" },
    { id: 3, icon: faCodePullRequest, text: "Request", path: "test" },
    { id: 4, icon: faPlus, text: "Generate", path: "generate" },
    { id: 5, icon: faDatabase, text: "DB connector", path: "database" },
  ];

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sidebar isCollapsed={isCollapsed}>
      <Logo isCollapsed={isCollapsed} onClick={handleToggleSidebar}>
        {isCollapsed ? (
          <LogoApp src={logoApp} alt="Logo" />
        ) : (
          <>
            <LogoApp src={logoApp} alt="Logo" />
            <span style={{ margin: 20 }}>straker</span>
          </>
        )}
      </Logo>
      {!isCollapsed && (
        <>
          <Separator />
          <LabelItem>Category 1</LabelItem>
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
      {!isCollapsed && (
        <>
          <Separator />
          <LabelItem>Category 2</LabelItem>
          <Separator />
        </>
      )}
      <LogoutButton isCollapsed={isCollapsed}>
        {!isCollapsed && <div style={{ marginRight: 10 }}>Logout</div>}
        <FontAwesomeIcon icon={faRightFromBracket} />
      </LogoutButton>
    </Sidebar>
  );
};

export default SidebarComponent;