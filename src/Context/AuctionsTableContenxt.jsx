import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import AuctionData, { AuctionTableHeaderData } from "../Data/AuctionData";
const AuctionsTableContenxt = createContext();
export function AuctionsTableContenxtProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditOpenModal, setIsEditOpenModal] = useState(false);
  const [autionsTableData, setAutionsTableData] = useState(AuctionData);
  const [editAutionsTableData, setEditAutionsTableData] = useState({
    editData: {},
    editMood: false,
  });
  const [auctionForm, setAuctionForm] = useState("");
  const [favourites, setFavouritesForm] = useState("");
  //Show Modal
  const showModal = () => {
    setIsOpenModal(true);
  };
  //Hide Modal
  const hideModal = () => {
    setIsOpenModal(false);
  };
  // Edit Show Modal
  const showEditModal = () => {
    setIsEditOpenModal(true);
  };
  //Edi Hide Modal
  const hideEditModal = () => {
    setIsEditOpenModal(false);
  };
  //Add New Auctions Table
  const newAuctionsTable = (newData) => {
    newData.id = uuidv4();
    setAutionsTableData([newData, ...autionsTableData]);
  };

  //Edit Auctions Table
  const editAuctionsTable = (editData) => {
    setEditAutionsTableData({
      editData,
      editMood: true,
    });
  };
  //Update Auctions Table
  const updateEditAuctionsTable = (id, updateData) => {
    setAutionsTableData(
      autionsTableData.map((item) => {
        return item.id == id ? { ...item, ...updateData } : item;
      })
    );
  };
  //Delete Auctions Table Item
  const deleteAuctionsTable = (deleteData) => {
    console.log(deleteData, "from data delete");
    setAutionsTableData(
      autionsTableData.filter((item) => {
        return item.id !== deleteData.id;
      })
    );
  };
  //Blank if the user does not submit the form

  //Set Form Value
  const handleChange = (e) => {
    setAuctionForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuctionForm(auctionForm);
  };
  //Set Form Value For Favourites
  const handleChangeFavourites = (e) => {
    setFavouritesForm(e.target.value);
  };
  const handleSubmitFavourites = (e) => {
    e.preventDefault();
    setFavouritesForm(auctionForm);
  };

  return (
    <AuctionsTableContenxt.Provider
      value={{
        autionsTableData,
        AuctionTableHeaderData,
        isOpenModal,
        isEditOpenModal,
        editAutionsTableData,
        auctionForm,
        favourites,
        showModal,
        hideModal,
        newAuctionsTable,
        editAuctionsTable,
        showEditModal,
        hideEditModal,
        deleteAuctionsTable,
        handleChange,
        handleSubmit,
        handleChangeFavourites,
        handleSubmitFavourites,
        updateEditAuctionsTable,
      }}
    >
      {children}
    </AuctionsTableContenxt.Provider>
  );
}

export default AuctionsTableContenxt;
