import React, { useState } from "react";

import {
  TaskType,
  useSetTasksTypeMutation,
} from "../../graphql/generated";

import okGray from "../../assets/vector/ok-gray.svg";
import plusGray from "../../assets/vector/plus-gray.svg";
import alarmGray from "../../assets/vector/alarm-gray.svg";
import commentRemove from "../../assets/vector/comment-remove.svg";

import { IContextMenuProps } from "./types";
import { ContextMenuItem, ContextMenuItems } from "./styles";
import Modals from "./Modals";
import { Tooltip } from "antd";

const ContextMenu: React.FC<IContextMenuProps> = ({ task, onSetSolved, onSetWrong }) => {
  const [currentModal, setCurrentModal] = useState<"error" | "comment" | undefined>(
    undefined
  );
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [setSolved] = useSetTasksTypeMutation({
    variables: {
      ids: [task.id],
      type: TaskType.Solved,
    },
  });
  const taskType = task.type;

  return (
    <>
      <ContextMenuItems key="container">
        {taskType === TaskType.Error || taskType === TaskType.Correct ? (
          <ContextMenuItem
            key="mark-correct"
            src={okGray}
            onClick={() => {
              setSolved();
              onSetSolved();
            }}
          />
        ) : null}
        <Tooltip placement="left" title={task.comment}>
          <ContextMenuItem
            key="add-comment"
            src={task.comment ? commentRemove : plusGray}
            onClick={() => {
              setCurrentModal("comment");
              setModalVisible(true);
            }}
          />
        </Tooltip>
        {
          taskType === TaskType.Solved || taskType === TaskType.Correct
            ? <ContextMenuItem
              key="mark-wrong"
              src={alarmGray}
              onClick={() => {
                setCurrentModal("error");
                setModalVisible(true);
              }}
            />
            : null
        }
      </ContextMenuItems>
      <Modals
        key="modals"
        type={currentModal}
        tasksIds={[task.id]}
        oldComment={task.comment || ""}
        visible={isModalVisible}
        onOk={() => {
          if (currentModal === "error") {
            onSetWrong();
          }
          setModalVisible(false)
        }}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
};

export default ContextMenu;
