import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RhombusTopLeft = Styled.img`
  position: fixed;
  top: 0;
  left: 0;
`;

export const RhombusBottomRight = Styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
`;

export const Logo = Styled.div`
  position: fixed;
  top: 60px;
  left: 90px;
  display: flex;
`;

export const LogoText = Styled.img`
  margin-left: 16px;
`;

export const Content = Styled.div`
  width: 320px;
  margin-top: 160px;
  z-index: 1;
`;

export const Title = Styled.div`
  font-weight: 300;
  font-size: 38px;
  line-height: 46px;
  text-align: center;
  color: #272F5A;
  margin-bottom: 32px;
`;