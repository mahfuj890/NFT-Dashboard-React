import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import AuctionsTableContenxt from "../../Context/AuctionsTableContenxt";
import Modal from "../Modal/Modal";
import AuctionsTableModal from "../Modal/AuctionsTableModal";
function ActionsTable() {
  const {
    autionsTableData,
    AuctionTableHeaderData,
    editAuctionsTable,
    showModal,
    isOpenModal,
    hideModal,
    showEditModal,
    hideEditModal,
    isEditOpenModal,
    editAutionsTableData,
    deleteAuctionsTable,
    auctionForm,
  } = useContext(AuctionsTableContenxt);
  const handleEditItem = (item) => {
    showEditModal();
    editAuctionsTable(item);
  };
  console.log(
    autionsTableData.filter((item) => {
      return item.ammout.toString().includes(1);
    })
  );

  //Search Functions
  const searchKeys = ["userName", "date", "status"];
  const searchFucntionlity = autionsTableData.filter((item) => {
    return (
      searchKeys.some((key) => item[key].toLowerCase().includes(auctionForm)) ||
      item.ammout.toString().includes(auctionForm)
    );
  });

  return (
    <div className="table_wrapper">
      {isEditOpenModal && (
        <Modal
          isOpen={isEditOpenModal}
          onCloseModal={hideEditModal}
          title={`Edit Auctions Of ${editAutionsTableData.editData.userName}`}
        >
          <AuctionsTableModal btnText="Update" />
        </Modal>
      )}
      <div className="tabler_inner_area">
        {autionsTableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                {AuctionTableHeaderData.map((item) => {
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
                          <button
                            type="button"
                            onClick={() => handleEditItem(item)}
                          >
                            <FaEdit size={20} />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteAuctionsTable(item)}
                          >
                            <AiTwotoneDelete size={20} />
                          </button>
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
  );
}

export default ActionsTable;
