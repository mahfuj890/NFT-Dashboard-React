import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import ReactPaginate from "react-paginate";

function Pagination({ handlePageClick, pageCount }) {
  return (
    <div className="pagination_area">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<HiOutlineArrowRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<HiOutlineArrowLeft />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
