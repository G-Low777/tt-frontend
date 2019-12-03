import React from "react";
import moment from "moment";

import { Task } from "../../graphql/generated";

import ContextMenu from "./ContextMenu";
import { BottomText, RowText, StackText, TopText } from "./styles";

const columns = [
  {
    title: "№ / ID",
    render(text: any, record: Task) {
      return (
        <StackText key="stack">
          <TopText key="top">{record.id}</TopText>
          <BottomText key="bottom">{record.number}</BottomText>
        </StackText>
      );
    }
  },
  {
    title: "Адрес",
    render(text: any, record: Task) {
      return (
        <StackText key="stack">
          <TopText key="top">{record.address}</TopText>
          <BottomText key="bottom">{record.mf}</BottomText>
        </StackText>
      );
    }
  },
  {
    title: "Название прибора",
    render(text: any, record: Task) {
      return (
        <StackText key="stack">
          <TopText key="top">{record.device} ({record.deviceId})</TopText>
          <BottomText key="bottom">{record.message}</BottomText>
        </StackText>
      );
    }
  },
  {
    title: "Дата создания/закрытия",
    render(text: any, record: Task) {
      const creationTime = moment(record.creationTime);
      const closingTime = record.closingTime ? moment(record.closingTime) : null;

      return (
        <StackText key="stack">
          <RowText key="creation-time">
            <TopText key="top">{creationTime.format("DD.MM.YYYY")}</TopText>
            <BottomText key="bottom">{creationTime.format("HH:mm:ss")}</BottomText>
          </RowText>
          {closingTime ? (
            <RowText key="closing-time">
              <TopText key="top">{closingTime.format("DD.MM.YYYY")}</TopText>
              <BottomText key="bottom">{closingTime.format("HH:mm:ss")}</BottomText>
            </RowText>
          ) : null}
        </StackText>
      );
    }
  },
  {
    title: "",
    render(text: any, record: Task) {
      return (
        <ContextMenu key="context-menu" task={record} />
      );
    }
  }
];

export default columns;
