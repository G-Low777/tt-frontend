import Styled from "styled-components";

export const menuItemStyle = {
  height: "48px",
  lineHeight: "48px",
};

export const LeftMenu = Styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  background: #fff;
  width: 208px;
`;

export const Logo = Styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const LogoIcon = Styled.img`
  margin-left: -29px;
  margin-right: 11px;
`;

export const LogoTextTT = Styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #272F5A;
  padding-right: 4px;
`;

export const LogoTextDiagnosis = Styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #272F5A;
  font-weight: 300;
`;

export const MenuItemIcon = Styled.img`
  margin-right: 8px;
`;

export const Content = Styled.div`
  margin: 0 55px 0 265px;
  padding: 24px 0;
`;

export const Title = Styled.div`
  font-size: 30px;
  line-height: 38px;
  color: #272F5A;
  font-weight: 300;
  margin-bottom: 16px;
`;