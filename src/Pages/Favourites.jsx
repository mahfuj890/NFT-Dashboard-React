import SearchBox from "../Components/Form/SearchBox";
import PageTitle from "../Components/PageTitle";
import FavouriteUserData, {
  FavouriteUserHeaderData,
} from "../Data/FavouriteUserData";
import { HiLink } from "react-icons/hi";
import { Link } from "react-router-dom";
function Favourites() {
  return (
    <section className="favourite_wrapper">
      <div className="d-flex-between">
        <PageTitle text="Favourite"  />
        <SearchBox />
      </div>
      <div className="table_wrapper">
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
              <tbody>
                {FavouriteUserData.map((item) => {
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
