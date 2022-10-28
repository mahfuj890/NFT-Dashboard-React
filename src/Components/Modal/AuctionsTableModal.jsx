import { useContext, useState, useEffect } from "react";
import AuctionsTableContenxt from "../../Context/AuctionsTableContenxt";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
function AuctionsTableModal({ btnText }) {
  const [showUploadImage, setShowUploadImage] = useState("");
  const {
    hideModal,
    newAuctionsTable,
    editAutionsTableData,
    setEditAutionsTableData,
    updateEditAuctionsTable,
    hideEditModal,
  } = useContext(AuctionsTableContenxt);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const handleChangeImage = (e) => {
    setShowUploadImage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = (data) => {
    if (editAutionsTableData.editMood == true) {
      const { id } = editAutionsTableData.editData;
      updateEditAuctionsTable(id, data.modalForm);
      hideEditModal();
      setEditAutionsTableData({ editMood: false });
    } else {
      newAuctionsTable(data.modalForm);
      hideModal();
    }
  };

  useEffect(
    (e) => {
      if (editAutionsTableData.editMood == true) {
        const { userName, userImg, date, status, ammout } =
          editAutionsTableData.editData;
        setValue("modalForm", {
          userName: userName,
          date: date,
          ammout: ammout,
          status: status,
          uploadImage: userImg,
        });
        setShowUploadImage(userImg);
      }
    },
    [editAutionsTableData]
  );

  return (
    <div className="auction_table_modal_area">
      <div className="modal_body_area">
        <form action="" className="form_area" onSubmit={handleSubmit(onSubmit)}>
          <div className="input_row">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input_filed"
              {...register("modalForm.userName", { required: "this" })}
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
              {...register("modalForm.date")}
            />
          </div>
          <div className="input_row">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="input_filed"
              {...register("modalForm.ammout")}
            />
          </div>
          <div className="input_row">
            <label htmlFor="">Status</label>
            <select
              name="status"
              id=""
              defaultValue={"DEFAULT"}
              {...register("modalForm.status")}
            >
              <option value="DEFAULT" disabled>
                Select Status
              </option>
              <option value="Complete">Complete</option>
              <option value="Failed">Failed </option>
              <option value="Progress">Progress</option>
            </select>
          </div>
          <div className="input_row">
            <label htmlFor="">Upload Image</label>
            <input
              type="file"
              placeholder="Enter Name"
              className="input_filed"
              {...register("modalForm.uploadImage")}
              onChange={handleChangeImage}
            />
            {showUploadImage && (
              <div className="preview_img_area">
                <img src={showUploadImage} />
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
