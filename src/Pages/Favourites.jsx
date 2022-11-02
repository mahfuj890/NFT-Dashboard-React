import { useContext } from "react";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import SearchBox from "../Components/Form/SearchBox";
import PageTitle from "../Components/PageTitle";
import FavouriteUserData, {
  FavouriteUserHeaderData,
} from "../Data/FavouriteUserData";
import { HiLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import AuctionsTableContenxt from "../Context/AuctionsTableContenxt";
import ReactPaginate from "react-paginate";
import usePaginationHook from "../Hooks/usePaginationHook";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
function Favourites() {
  useDocumentTitle("Favourites");
  const { favourites, handleChangeFavourites, handleSubmitFavourites } =
    useContext(AuctionsTableContenxt);

  //Search Functions
  const searchKeys = ["userName", "date", "status"];
  const searchFucntionlity = FavouriteUserData.filter((item) => {
    return (
      searchKeys.some((key) => item[key].toLowerCase().includes(favourites)) ||
      item.ammout.toString().includes(favourites)
    );
  });
  const [currentItems, handlePageClick, pageCount] = usePaginationHook(
    searchFucntionlity,
    favourites
  );
  return (
    <section className="favourite_wrapper">
      <div className="d-flex-between">
        <PageTitle text="Favourite" />
        <SearchBox
          handleChange={handleChangeFavourites}
          handleSubmit={handleSubmitFavourites}
          inputValue={favourites}
        />
      </div>
      <div className="table_wrapper">
        <div className="tabler_inner_area">
          {FavouriteUserData.length > 0 ? (
            <>
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
              <table>
                <thead>
                  <tr>
                    {FavouriteUserHeaderData.map((item) => {
                      return (
                        <th key={item.id}>
                          <h4 key={item.id}>{item.title}</h4>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {searchFucntionlity.length > 0 ? (
                    currentItems &&
                    currentItems.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <div className="user_img_grid">
                              <img src={item.userImg} alt="user img" />
                              <h4>{item.userName} </h4>
                            </div>
                          </td>
                          <td>
                            <h4>{item.date} </h4>
                          </td>
                          <td>
                            <h4>{item.ammout} </h4>
                          </td>
                          <td>
                            <h4
                              className={`${
                                item.status.toLowerCase() == "complete"
                                  ? "complete"
                                  : ""
                              } ${
                                item.status.toLowerCase() == "failed"
                                  ? "failed"
                                  : ""
                              } ${
                                item.status.toLowerCase() == "progress"
                                  ? "progress"
                                  : ""
                              }`}
                            >
                              {item.status}
                            </h4>
                          </td>
                          <td>
                            <div className="actions_list">
                              <Link to={"/"}>
                                <HiLink size={20} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td>
                        <h4>There is no data</h4>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <h4>There is no data</h4>
          )}
        </div>
        <div className="tabler_inner_area">
          {FavouriteUserData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  {FavouriteUserHeaderData.map((item) => {
                    return (
                      <th key={item.id}>
                        <h4 key={item.id}>{item.title}</h4>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              {searchFucntionlity.length > 0 ? (
                <tbody>
                  {searchFucntionlity.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="user_img_grid">
                            <img src={item.userImg} alt="user img" />
                            <h4>{item.userName} </h4>
                          </div>
                        </td>
                        <td>
                          <h4>{item.date} </h4>
                        </td>
                        <td>
                          <h4>{item.ammout} </h4>
                        </td>
                        <td>
                          <h4
                            className={`${
                              item.status.toLowerCase() == "complete"
                                ? "complete"
                                : ""
                            } ${
                              item.status.toLowerCase() == "failed"
                                ? "failed"
                                : ""
                            } ${
                              item.status.toLowerCase() == "progress"
                                ? "progress"
                                : ""
                            }`}
                          >
                            {item.status}
                          </h4>
                        </td>
                        <td>
                          <div className="actions_list">
                            <Link to={"/"}>
                              <HiLink size={20} />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <h4 style={{ marginTop: "20px", textAlign: "center" }}>
                          <b>No Search Result</b>
                        </h4>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          ) : (
            <h4>There is no data</h4>
          )}
        </div>
      </div>
    </section>
  );
}

export default Favourites;
