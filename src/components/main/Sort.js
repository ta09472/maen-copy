import React from "react";
import SortStyled from "../styled/mainStyled/SortStyled";
import ButtonStyled from "../styled/commonStyled/ButtonStyled";
import { MdTrendingUp } from "react-icons/md";
import { MdAvTimer } from "react-icons/md";
import { Route, Routes, NavLink } from "react-router-dom";
import Main from "./Main";
import Recent from "../recent/Recent";

const navLinkStyled = ({ isActive }) => {
  return {
    borderBottom: isActive ? "2px solid black" : "white",
  };
};

const Sort = () => {
  return (
    <SortStyled>
      <NavLink style={navLinkStyled} to="/">
        <ButtonStyled>
          <MdTrendingUp />
          인기
        </ButtonStyled>
      </NavLink>
      <NavLink style={navLinkStyled} to="/recent">
        <ButtonStyled>
          <MdAvTimer />
          최신
        </ButtonStyled>
      </NavLink>
    </SortStyled>
  );
};

export default Sort;
