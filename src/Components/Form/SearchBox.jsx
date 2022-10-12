import searchIcon from "../../../src/assets/images/icon/search_icon.svg";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import FormContext from "../../Context/FormContext";

function SearchBox({
  inputType,
  placeholderText,
  searchBtn,
  handleChange,
  handleSubmit,
  inputValue,
}) {
  const { searchBox, setSearchBox, handleChangle } = useContext(FormContext);
  return (
    <form
      action=""
      className={`search_form_area ${searchBtn ? "search_form_grid" : ""}`}
    >
      <input
        type={inputType}
        onChange={handleChangle}
        placeholder={placeholderText}
        value={searchBox}
      />
      {searchBtn && (
        <button type="submit" className="search_btn">
          <img src={searchIcon} alt="search" />
        </button>
      )}
    </form>
  );
}
SearchBox.defaultProps = {
  inputType: "text",
  placeholderText: "search",
  searchBtn: true,
};
SearchBox.propTypes = {
  inputType: PropTypes.string,
  placeholderText: PropTypes.string,
  searchBtn: PropTypes.bool,
};

export default SearchBox;
