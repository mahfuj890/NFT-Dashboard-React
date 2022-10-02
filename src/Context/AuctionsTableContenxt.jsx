import {v4 as uuidv4} from "uuid";
import { createContext, useState } from "react";
import AuctionData, { AuctionTableHeaderData } from "../Data/AuctionData";
const AuctionsTableContenxt = createContext();
export function AuctionsTableContenxtProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [autionsTableData, setAutionsTableData] = useState(AuctionData );


  //Show Modal
  const showModal = () => {
    setIsOpenModal(true);
  };
  //Hide Modal
  const hideModal = () => {
    setIsOpenModal(false);
  };
 //Add New Auctions Table
 const newAuctionsTable = (newData) => {
newData.id = uuidv4();
 setAutionsTableData([newData,...autionsTableData]);

 }

  return (
    <AuctionsTableContenxt.Provider
      value={{
        autionsTableData,
        AuctionTableHeaderData,
        isOpenModal,
        showModal,
        hideModal,
        newAuctionsTable,

      }}
    >
      {children}
    </AuctionsTableContenxt.Provider>
  );
}

export default AuctionsTableContenxt;
