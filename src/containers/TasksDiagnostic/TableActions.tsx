import React, { useState } from "react";
import { Input, Select, Button } from "antd";

import down from "../../assets/vector/down.svg";
import min from "../../assets/vector/min.svg";
import max from "../../assets/vector/max.svg";
import alarm from "../../assets/vector/alarm.svg";
import comment from "../../assets/vector/comment.svg";
import ok from "../../assets/vector/ok.svg";

import {
  ButtonIcon,
  Buttons,
  ButtonSpace,
  FilterSpoiler,
  FilterSpoilerIcon,
  SearchNSort,
  SelectOptionIcon,
  Sort,
  SortBy,
  sortSelectStyle,
} from "./styles";
import { ITableActionsProps } from "./types";
import { TaskType, useSetTasksTypeMutation } from "../../graphql/generated";
import Modals from "./Modals";

const sortSelectDefaultValue = {
  key: "ASC"
};

const TableActions: React.FC<ITableActionsProps> = ({ tasksIds, taskTypes, clearSelection }) => {
  const [currentModal, setCurrentModal] = useState<"error" | "comment" | undefined>(
    undefined
  );
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [setSolved] = useSetTasksTypeMutation({
    variables: {
      ids: tasksIds,
      type: TaskType.Solved,
    },
  });

  const isButtonsDisabled = tasksIds.length === 0;

  return (
    <div key="container">
      <FilterSpoiler key="filter">
        <FilterSpoilerIcon key="icon" src={down} />
        Фильтр
      </FilterSpoiler>
      <SearchNSort key="search-n-sort">
        <Input.Search
          key="search"
          placeholder="Введите номер задачи или адрес "
        />
        <Sort key="sort">
          <SortBy key="sort-by">Сортировать по:</SortBy>
          <Select
            key="select"
            defaultActiveFirstOption={true}
            style={sortSelectStyle}
            labelInValue={true}
            defaultValue={sortSelectDefaultValue}
          >
            <Select.Option value="ASC">
              <SelectOptionIcon key="icon" src={min} />
              времени создания
            </Select.Option>
            <Select.Option value="DESC">
              <SelectOptionIcon key="icon" src={max} />
              времени создания
            </Select.Option>
          </Select>
        </Sort>
      </SearchNSort>
      <Buttons key="buttons">
        {!taskTypes || taskTypes === TaskType.Error ? (
          <>
            <Button
              key="correct"
              disabled={isButtonsDisabled}
              onClick={() => setSolved().then(() => clearSelection())}
            >
              <ButtonIcon key="icon" src={ok} /> Правильно
            </Button>
            <ButtonSpace key="space-1" />
          </>
        ) : null}
        <Button
          key="comment"
          disabled={isButtonsDisabled}
          onClick={() => {
            setCurrentModal("comment");
            setModalVisible(true);
          }}
        >
          <ButtonIcon key="icon" src={comment} /> Добавить комментарий
        </Button>
        {!taskTypes || taskTypes === TaskType.Solved ? (
          <>
            <ButtonSpace key="space-2" />
            <Button
              key="error"
              disabled={isButtonsDisabled}
              onClick={() => {
                setCurrentModal("error");
                setModalVisible(true);
              }}
            >
              <ButtonIcon key="icon" src={alarm} /> Ошибка
            </Button>
          </>
        ) : null}
      </Buttons>
      <Modals
        key="modals"
        type={currentModal}
        tasksIds={tasksIds}
        visible={isModalVisible}
        oldComment=""
        onOk={() => {
          clearSelection();
          setModalVisible(false);
        }}
        onCancel={() => {
          setModalVisible(false)
        }}
      />
    </div>
  )
};

export default TableActions;