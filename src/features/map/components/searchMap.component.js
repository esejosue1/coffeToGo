//search bar for Map component

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  width: 100%;
  top: 30px;
  z-index: 999;

`;

export const Search = () => {
  //submit what the keyword is going to be
  const { keyword, search } = useContext(LocationContext);
  //set the keyword
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //local map search, should be the same as the restaurant page search
  useEffect(() =>{
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        icon="map"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
