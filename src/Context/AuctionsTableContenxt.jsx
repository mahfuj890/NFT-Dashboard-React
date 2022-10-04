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

  //Blank if the user does not submit the form

  return (
    <AuctionsTableContenxt.Provider
      value={{
        autionsTableData,
        AuctionTableHeaderData,
        isOpenModal,
        isEditOpenModal,
        editAutionsTableData,
        showModal,
        hideModal,
        newAuctionsTable,
        editAuctionsTable,
        showEditModal,
        hideEditModal,
      }}
    >
      {children}
    </AuctionsTableContenxt.Provider>
  );
}

export default AuctionsTableContenxt;
