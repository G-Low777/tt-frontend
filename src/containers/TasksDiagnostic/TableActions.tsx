import React from "react";

import down from "../../assets/vector/down.svg";

import { FilterSpoiler, FilterSpoilerIcon } from "./styles";

const TableActions: React.FC = () => {
  return (
    <div key="container">
      <FilterSpoiler key="filter">
        <FilterSpoilerIcon key="icon" src={down} />
        Фильтр
      </FilterSpoiler>
    </div>
  )
};

export default TableActions;