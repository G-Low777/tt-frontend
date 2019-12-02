import Styled from "styled-components";

export const Container = Styled.div`
  background: #fff;
  border: 1px solid #E8E8E8;
  border-radius: 4px;
  padding: 7px 24px 32px 24px;
`;

export const TabLine = Styled.div`
  position: relative;
  height: 1px;
  margin: 0 -24px;
  background: #E8E8E8;
  top: 55px;
`;

export const StackText = Styled.div``;

export const RowText = Styled.div`
  display: flex;
  align-items: baseline;
`;

export const TopText = Styled.div`
  font-size: 14px;
  line-height: 22px;
  color: rgba(39, 47, 90, 0.65);
  margin-right: 8px;
`;

export const BottomText = Styled.div`
  font-size: 12px;
  line-height: 20px;
  color: rgba(39, 47, 90, 0.45);
`;

export const FilterSpoiler = Styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  background: #f7f7f7;
  color: #272F5A;
  font-size: 14px;
  margin: 8px 0 24px 0;
`;

export const FilterSpoilerIcon = Styled.img`
  margin-right: 8px;
`;