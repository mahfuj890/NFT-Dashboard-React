import { useState } from "react";
import Select from "react-select";

function SelectComponent({ options, handleChange }) {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  return (
    <Select
      className="single_select_area"
      classNamePrefix="select"
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name="color"
      options={options}
      onChange={handleChange}
    />
  );
}

export default SelectComponent;
