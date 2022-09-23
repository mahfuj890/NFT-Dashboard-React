import { createContext, useState, useEffect } from "react";
import FeatureNftData from "../Data/FeatureNftData";
const SliderContext = createContext();

export function SliderContextProvider({ children }) {
  const [featureSliderData, setFeatureSliderData] = useState(FeatureNftData);
  const [filterSliderData, setFilterSliderData] = useState([]);
  //Feature Product Filter
  // const filterProduct = featureSliderData.filter((item) => {
  //   return item.tag.includes("popular");
  // });

  const filterProductFun = (tag) => {
    console.log(tag, "from context");
    const filterProduct = featureSliderData.filter((item) => {
      return item.tag.includes(tag) ? setFilterSliderData(item) : null;
    });
    console.log(filterProduct, typeof filterProduct, "to context inside");

    return filterProduct;
  };
  console.log("from context data main", filterSliderData);

  return (
    <SliderContext.Provider value={{ featureSliderData, filterProductFun }}>
      {children}
    </SliderContext.Provider>
  );
}

export default SliderContext;
