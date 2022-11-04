import { createContext, useState, useEffect } from "react";
import FeatureNftData from "../Data/FeatureNftData";
const SliderContext = createContext();

export function SliderContextProvider({ children }) {
  const [featureSliderData, setFeatureSliderData] = useState(FeatureNftData);
  const [filterSliderData, setFilterSliderData] = useState([]);

  const filterProductFun = (tag) => {
    console.log(tag, "from context");

    if (tag.toLowerCase() == "all") {
      setFeatureSliderData(FeatureNftData);
    } else {
      setFeatureSliderData(
        FeatureNftData.filter((item) => {
          return item.tag.includes(tag.toLowerCase());
        })
      );
    }
  };

  return (
    <SliderContext.Provider
      value={{
        featureSliderData,
        setFeatureSliderData,
        filterProductFun,
        FeatureNftData,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export default SliderContext;
