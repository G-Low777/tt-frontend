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

export const SearchNSort = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Sort = Styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

export const SelectOptionIcon = Styled.img`
  margin-right: 4px;
`;

export const SortBy = Styled.span`
  margin-right: 8px;
`;

export const Buttons = Styled.div`
  margin-bottom: 8px;
`;

export const ButtonSpace = Styled.span`
  margin-right: 8px;
`;

export const ButtonIcon = Styled.img`
  margin-right: 8px;
  margin-top: -1px;
`;

export const ContextMenuItems = Styled.div`
  width: 96px;
`;

export const ContextMenuItem = Styled.img`
  padding: 8px;
  transition: opacity 0.3s ease;
  opacity: 1;
  &:hover {
    opacity: 0.4;
  }
`;

export const ModalErrorText = Styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(39, 47, 90, 0.65);
`;

export const ModalCloseIcon = Styled.img`
  width: 16px;
  height: 16px;
  padding: 2px;
`;

export const ModalTitle = Styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #272F5A;
`;

export const errorOkButtonProps = {
  style: {
    padding: "4px 24px 6px 25px",
    minWidth: "120px",
  },
};

export const commentOkButtonProps = {
  style: {
    padding: "4px 16px 6px",
    minWidth: "120px",
  },
};

export const cancelButtonProps = {
  style: {
    padding: "4px 13px 6px 14px",
    color: "#272F5A",
  },
};

export const errorBodyStyle = {
  paddingBottom: "8px",
};
export const commentBodyStyle = {
  paddingBottom: 0,
};

export const commentFormItemStyle = {
  marginBottom: "20px",
};

export const textAreaStyle = {
  resize: "none" as const,
};
