import React, { useEffect, useState, useContext } from "react";
import AuctionsTableContenxt from "../Context/AuctionsTableContenxt";

function usePaginationHook(searchFucntionlity,inputFormValue,itemPerPage=10) {
 
  console.log('paginate hook',searchFucntionlity,inputFormValue,perPageValue);
  
    
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = itemPerPage;
 
    console.log('paginate hook',currentItems);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(searchFucntionlity.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(searchFucntionlity.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, inputFormValue]);
  
    const handlePageClick = (event) => {
      const newOffset =
        (event.selected * itemsPerPage) % searchFucntionlity.length;
      setItemOffset(newOffset);
    };
  return  [currentItems,handlePageClick,pageCount]
}

export default usePaginationHook