import { useContext, useState, useEffect } from "react";
import AuctionsTableContenxt from "../../Context/AuctionsTableContenxt";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
function AuctionsTableModal({ btnText }) {
  const [modalForm, setModalForm] = useState();
  const [showUploadImage, setShowUploadImage] = useState("");
  const { hideModal, newAuctionsTable, editAutionsTableData, hideEditModal } =
    useContext(AuctionsTableContenxt);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
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

  const handleChangeImage = (e) => {
    setShowUploadImage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = (data) => {
    if (editAutionsTableData.editMood == true) {
      console.log(data);

      hideEditModal();
    } else {
      console.log(data.modalForm);
      newAuctionsTable(data.modalForm);
      hideModal();
    }
  };

  // console.log(watch("example"));
  useEffect(
    (e) => {
      if (editAutionsTableData.editMood == true) {
        console.log(editAutionsTableData);
        const { userName, userImg, date, status, ammout } =
          editAutionsTableData.editData;

        setValue("modalForm", {
          userNameInput: userName,
          date: date,
          amount: ammout,
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
              {...register("modalForm.userNameInput")}
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
              {...register("modalForm.amount")}
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
