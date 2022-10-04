import { useContext, useState, useEffect } from "react";
import AuctionsTableContenxt from "../../Context/AuctionsTableContenxt";
import Button from "../Button/Button";
function AuctionsTableModal({ btnText }) {
  const [modalForm, setModalForm] = useState({
    name: "",
    date: "",
    amount: "",
    status: "",
    uploadImage: "",
  });
  const { hideModal, newAuctionsTable, editAutionsTableData, hideEditModal } =
    useContext(AuctionsTableContenxt);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setModalForm((prevState) => {
      switch (name) {
        case "name":
          return {
            name: value,
            date: prevState.date,
            amount: prevState.amount,
            status: prevState.status,
            uploadImage: prevState.uploadImage,
          };
        case "date":
          return {
            name: prevState.name,
            date: value,
            amount: prevState.amount,
            status: prevState.status,
            uploadImage: prevState.uploadImage,
          };
        case "amount":
          return {
            name: prevState.name,
            date: prevState.date,
            amount: value,
            status: prevState.status,
            uploadImage: prevState.uploadImage,
          };
        case "status":
          return {
            name: prevState.name,
            date: prevState.date,
            amount: prevState.amount,
            status: value,
            uploadImage: prevState.uploadImage,
          };
        case "uploadImage":
          return {
            name: prevState.name,
            date: prevState.date,
            amount: prevState.amount,
            status: prevState.status,
            uploadImage: URL.createObjectURL(e.target.files[0]),
          };
      }
    });
  };
  const hanldeForm = (e) => {
    e.preventDefault();

    //Get Data
    const getNewData = {
      userImg: modalForm.uploadImage,
      userName: modalForm.name,
      date: modalForm.date,
      ammout: modalForm.amount,
      status: modalForm.status,
    };

    if (editAutionsTableData.editMood == true) {
      hideEditModal();
    } else {
      newAuctionsTable(getNewData);
      hideModal();
    }
  };
  useEffect(
    (e) => {
      if (editAutionsTableData.editMood == true) {
        // modalForm.name = editAutionsTableData.editData.userName;
      }
    },
    [editAutionsTableData]
  );

  return (
    <div className="auction_table_modal_area">
      <div className="modal_body_area">
        <form action="" className="form_area" onSubmit={hanldeForm}>
          <div className="input_row">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input_filed"
              name="name"
              onChange={handleChange}
              value={modalForm.name}
            />
          </div>

          <div className="input_row">
            <label htmlFor="">Date</label>
            <input
              type="text"
              placeholder="Enter Date"
              className="input_filed"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="date"
              onChange={handleChange}
              value={modalForm.date}
            />
          </div>
          <div className="input_row">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="input_filed"
              name="amount"
              onChange={handleChange}
              value={modalForm.amount}
            />
          </div>
          <div className="input_row">
            <label htmlFor="">Status</label>
            <select
              name="status"
              id=""
              defaultValue={"DEFAULT"}
              onChange={handleChange}
            >
              <option value="DEFAULT" disabled>
                Select Status
              </option>
              <option value="complete">Complete</option>
              <option value="failed">Failed</option>
              <option value="progress">Progress</option>
            </select>
          </div>
          <div className="input_row">
            <label htmlFor="">Upload Image</label>
            <input
              type="file"
              placeholder="Enter Name"
              className="input_filed"
              name="uploadImage"
              onChange={handleChange}
            />
            {modalForm.uploadImage && (
              <div className="preview_img_area">
                <img src={modalForm.uploadImage} />
              </div>
            )}
          </div>

          <div className="submit_btn_row">
            <Button type="submit" children={btnText} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuctionsTableModal;
