import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
function ActionsTable({ tableHeader, tableBody }) {
  return (
    <div className="table_wrapper">
      <div className="tabler_inner_area">
        <table>
          <thead>
            <tr>
              {tableHeader.map((item) => {
                return (
                  <th key={item.id}>
                    <h4 key={item.id}>{item.title}</h4>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((item) => {
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
                        item.status.toLowerCase() == "failed" ? "failed" : ""
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
                      <button type="button">
                        <FaEdit size={20} />
                      </button>
                      <button type="button">
                        <AiTwotoneDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActionsTable;
