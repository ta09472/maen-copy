import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/module/search";
import SearchUserStyled from "../styled/searchStyled/SearchUserStyled";
import UserBlock from "../common/UserBlock";
import SearchResultWrapper from "../styled//searchStyled/SearchResultWrapper";

const SearchUser = () => {
  return (
    <SearchUserStyled>
      <p>Users</p>
      <SearchResultWrapper>
        <UserBlock />
      </SearchResultWrapper>
    </SearchUserStyled>
  );
};

export default SearchUser;
