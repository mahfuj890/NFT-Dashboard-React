import { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
function SelectComponent({ options, handleChange, defaultValueIndex }) {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  return (
    <div className="select_wrapper">
      <Select
        className="single_select_area"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        defaultValue={options[defaultValueIndex]}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

SelectComponent.defaultValue = {
  defaultValueIndex: null,
};

export default SelectComponent;
