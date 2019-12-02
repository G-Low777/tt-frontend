import React, { useContext } from "react";
import { Menu } from "antd";

import logo from "../../assets/vector/logo.svg";
import monitoring from "../../assets/vector/monitoring.svg";
import exit from "../../assets/vector/exit.svg";
import { useLogoutMutation } from "../../graphql/generated";
import TitleContext from "../../decorators/TitleContext";

import { IProps } from "./types";
import {
  LeftMenu,
  Logo,
  LogoIcon,
  LogoTextTT,
  LogoTextDiagnosis,
  MenuItemIcon,
  menuItemStyle,
  Content, Title,
} from "./styles";
import { renderRoutes } from "react-router-config";

const Authorized: React.FC<IProps> = props => {
  const [logout] = useLogoutMutation();
  const [title] = useContext(TitleContext);

  return (
    <div key="container">
      <LeftMenu key="left-menu">
        <Logo key="logo">
          <LogoIcon key="icon" src={logo} alt="logo" />
          <div key="logo-text">
            <LogoTextTT key="tt">TT</LogoTextTT>
            <LogoTextDiagnosis key="diagnosis">Diagnosis</LogoTextDiagnosis>
          </div>
        </Logo>
        <Menu
          defaultSelectedKeys={["tasks-diagnostic"]}
          mode="inline"
        >
          <Menu.Item key="tasks-diagnostic" style={menuItemStyle}>
            <MenuItemIcon key="icon" src={monitoring} alt="icon" />
            Диагностика задач
          </Menu.Item>
          <Menu.Item key="logout" style={menuItemStyle} onClick={() => logout()}>
            <MenuItemIcon key="icon" src={exit} alt="icon" />
            Выйти из системы
          </Menu.Item>
        </Menu>
      </LeftMenu>
      <Content key="content">
        <Title key="title">{title}</Title>
        {renderRoutes(props.route.childRoutes)}
      </Content>
    </div>
  )
};

export default Authorized;
