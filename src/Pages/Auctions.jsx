import { useContext } from "react";
import SearchBox from "../Components/Form/SearchBox";
import PageTitle from "../Components/PageTitle";
import ActionsTable from "../Components/Table/ActionsTable";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import Button from "../Components/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../Components/Modal/Modal";
import AuctionsTableModal from "../Components/Modal/AuctionsTableModal";
import AuctionsTableContenxt from "../Context/AuctionsTableContenxt";

function Auctions() {
  useDocumentTitle("Auctions");
  const { isOpenModal, showModal,hideModal } = useContext(AuctionsTableContenxt);

  return (
    <section className="auctions_wrapper">
      <div className="d-flex-between">
        <PageTitle text="Auctions" bottomSpace={false} />
        <SearchBox />
      </div>
      <div className="add_btn_area ">
        <Button
          onHandleClick={showModal}
          children={
            <>
              <span>{<AiOutlinePlus />} </span> Add
            </>
          }
        />
      </div>
      <div className="auctions_table_wrapper">
        <ActionsTable

        />
      </div>
      <Modal
        isOpen={isOpenModal}
        onCloseModal={hideModal}
        title="Add New Auctions"
      >
        <AuctionsTableModal   />
      </Modal>
    </section>
  );
}

export default Auctions;
