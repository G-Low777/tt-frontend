import React from 'react';

import { TaskType, useSetTasksTypeMutation } from '../../graphql/generated';

import okGray from '../../assets/vector/ok-gray.svg';
import plusGray from '../../assets/vector/plus-gray.svg';
import alarmGray from '../../assets/vector/alarm-gray.svg';

import { IContextMenuProps } from './types';
import { ContextMenuItem, ContextMenuItems } from './styles';

const ContextMenu: React.FC<IContextMenuProps> = props => {
  const [setSolved] = useSetTasksTypeMutation({
    variables: {
      ids: [props.task.id],
      type: TaskType.Solved,
    },
  });
  const [setWrong] = useSetTasksTypeMutation({
    variables: {
      ids: [props.task.id],
      type: TaskType.Error,
    },
  });
  const taskType = props.task.type;

  return (
    <ContextMenuItems key="container">
      {
        taskType === TaskType.Error || taskType === TaskType.Correct
          ? <ContextMenuItem key="mark-correct" src={okGray} onClick={() => setSolved()} />
          : null
      }
      <ContextMenuItem key="add-comment" src={plusGray}/>
      {
        taskType === TaskType.Solved || taskType === TaskType.Correct
          ? <ContextMenuItem key="mark-wrong" src={alarmGray} onClick={() => setWrong()} />
          : null
      }
    </ContextMenuItems>
  );
};

export default ContextMenu;
