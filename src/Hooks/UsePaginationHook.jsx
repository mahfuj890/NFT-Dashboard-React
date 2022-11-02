import React, { useEffect, useState, useContext } from "react";

function usePaginationHook(
  searchFucntionlity,
  inputFormValue,
  itemPerPage = 10
) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = itemPerPage;

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
  return [currentItems, handlePageClick, pageCount];
}

export default usePaginationHook;
