import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Filter = () => (
  <div>
    <span style={{ fontSize: "13px" }}>필터: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>전체</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>미완</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>완료</FilterLink>
  </div>
);

export default Filter;
