import { useState } from "react";
import SearchBox from "../Components/Form/SearchBox";
import PageTitle from "../Components/PageTitle";
import ActionsTable from "../Components/Table/ActionsTable";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import Button from "../Components/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { AuctionTableHeaderData } from "../Data/AuctionData";
import AuctionData from "../Data/AuctionData";
import Modal from "../Components/Modal/Modal";
import AuctionsTableModal from "../Components/Modal/AuctionsTableModal";

function Auctions() {
  useDocumentTitle("Auctions");
  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <section className="auctions_wrapper">
      <div className="d-flex-between">
        <PageTitle text="Auctions" bottomSpace={false} />
        <SearchBox />
      </div>
      <div className="add_btn_area ">
        <Button
          onHandleClick={(e) => setIsOpenModal(true)}
          children={
            <>
              <span>{<AiOutlinePlus />} </span> Add
            </>
          }
        />
      </div>
      <div className="auctions_table_wrapper">
        <ActionsTable
          tableHeader={AuctionTableHeaderData}
          tableBody={AuctionData}
        />
      </div>
      <Modal
        isOpen={isOpenModal}
        onCloseModal={(e) => setIsOpenModal(false)}
        title="Add New Auctions"
      >
        <AuctionsTableModal />
      </Modal>
    </section>
  );
}

export default Auctions;
