import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '25vw',  
  maxWidth: '500px',
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
    width: "50vw",  // Ajusta el ancho para pantallas sm
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(-1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchNav = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("Búsqueda realizada: ", searchValue);
    setSearchValue("");
  };

  const handleIconClick = () => {
    if (searchValue) {
      handleSearch();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchValue) {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <Search>
      <IconButton sx={{ color: "inherit" }} onClick={handleIconClick}>
        <SearchIcon />
      </IconButton>
      <StyledInputBase
        placeholder="Buscar..."
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDown}
      />
    </Search>
  );
};

export default SearchNav;
