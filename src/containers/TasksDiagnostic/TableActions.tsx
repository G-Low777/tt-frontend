import React from "react";
import { Input, Select } from "antd";

import down from "../../assets/vector/down.svg";
import min from "../../assets/vector/min.svg";
import max from "../../assets/vector/max.svg";

import { FilterSpoiler, FilterSpoilerIcon, SearchNSort, SelectOptionIcon, Sort, SortBy } from "./styles";

const TableActions: React.FC = () => {
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
            style={{ width: "204px" }}
            defaultValue={(
              <>
                <SelectOptionIcon key="icon" src={min} />
                времени создания
              </>
            )}
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
    </div>
  )
};

export default TableActions;