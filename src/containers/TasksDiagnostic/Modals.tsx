import React, { useState } from "react";
import { Modal, Input } from "antd";

import close from "../../assets/vector/close.svg";

import FormItem from "../../components/FormItem";

import {
  TaskType,
  useSetTasksTypeMutation,
  useSetTasksCommentMutation
} from "../../graphql/generated";

import { IModalsProps } from "./types";
import {
  ModalErrorText,
  ModalCloseIcon,
  ModalTitle,
  errorBodyStyle,
  commentBodyStyle,
  errorOkButtonProps,
  commentOkButtonProps,
  cancelButtonProps,
  commentFormItemStyle,
  textAreaStyle,
} from "./styles";

const closeIcon = <ModalCloseIcon key="close-icon" src={close} />;

const Modals: React.FC<IModalsProps> = ({
  tasksIds,
  visible,
  type,
  onOk,
  onCancel,
  oldComment
}) => {
  const [comment, setComment] = useState<string>(oldComment);
  const [setWrong] = useSetTasksTypeMutation({
    variables: {
      ids: tasksIds,
      type: TaskType.Error,
      errorComment: comment.length > 0 ? comment : null,
    },
  });
  const [setTaskComment] = useSetTasksCommentMutation({
    variables: {
      ids: tasksIds,
      comment,
    },
  });
  const isError = type === "error";

  return (
    <Modal
      key="container"
      title={
        <ModalTitle key="title">
          {isError ? "Сообщить об ошибке" : "Оставление комментария"}
        </ModalTitle>
      }
      okText={isError ? "Сообщить" : "Оставить комментарий"}
      cancelText="Отмена"
      destroyOnClose={true}
      visible={visible}
      closeIcon={closeIcon}
      bodyStyle={isError ? errorBodyStyle : commentBodyStyle}
      okButtonProps={isError ? errorOkButtonProps : commentOkButtonProps}
      cancelButtonProps={cancelButtonProps}
      onOk={e => {
        isError ? setWrong() : setTaskComment();
        setComment("");
        if (onOk) {
          onOk(e);
        }
      }}
      onCancel={e => {
        setComment("");
        if (onCancel) {
          onCancel(e);
        }
      }}
    >
      {isError ? (
        <ModalErrorText key="error-text">
            Вы можете оставить комментарий о причине ошибки. Это позволит нам внести исправления
        </ModalErrorText>
      ) : null}
      <FormItem
        key="form-item"
        label="Текст комментария"
        style={isError ? undefined : commentFormItemStyle}
      >
        <Input.TextArea
          key="textarea"
          rows={isError ? 2 : 5}
          autoSize={{
            minRows: isError ? 2 : 5,
            maxRows: isError ? 2 : 5,
          }}
          style={textAreaStyle}
          value={comment || oldComment}
          onChange={
            (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.currentTarget.value)
          }
        />
      </FormItem>
    </Modal>
  );
};

export default Modals;
