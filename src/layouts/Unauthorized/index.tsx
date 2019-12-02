import React, { useContext } from "react";
import { renderRoutes } from "react-router-config";

import rhombusGray from "../../assets/vector/rhombus-gray.svg";
import rhombusBlue from "../../assets/vector/rhombus-blue.svg";
import logo from "../../assets/vector/logo.svg";
import logoText from "../../assets/vector/logo-text.svg";

import { Container, RhombusTopLeft, RhombusBottomRight, Logo, LogoText, Content, Title } from "./styles";
import { IProps } from "./types";
import TitleContext from '../../decorators/TitleContext';

const Unauthorized: React.FC<IProps> = props => {
  const [title] = useContext(TitleContext);

  return (
    <Container key="container">
      <RhombusTopLeft key="rhombus-top-left" src={rhombusBlue} />
      <Logo key="logo">
        <img key="icon" src={logo} alt="logo" />
        <LogoText key="text" src={logoText} alt="logo text" />
      </Logo>
      <Content key="content">
        <Title key="title">{title}</Title>
        {renderRoutes(props.route.childRoutes)}
      </Content>
      <RhombusBottomRight key="rhombus-bottom-right" src={rhombusGray} />
    </Container>
  )
};

export default Unauthorized;