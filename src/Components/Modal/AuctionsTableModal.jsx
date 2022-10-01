import { useState } from "react";
import Button from "../Button/Button";

function AuctionsTableModal() {
  const [modalForm, setModalForm] = useState({
    name: "",
    date: "",
    amount: "",
    status: "",
  });
  const handleChange = (e) => {
    console.log("change");

    const { value, name } = e.target;
  };
  const hanldeForm = (e) => {
    e.preventDefault();
    console.log("submit");

    const value = e.target.value;
    console.log(value);
  };
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
            <select name="" id="">
              <option value="complete">Complete</option>
              <option value="failed">Failed</option>
              <option value="progress">Progress</option>
            </select>
          </div>
          <div className="submit_btn_row">
            <Button type="submit" children="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuctionsTableModal;
