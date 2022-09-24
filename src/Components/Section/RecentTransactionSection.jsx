import React from "react";
import TransactionData from "../../Data/TransactionData";
import PageTitle from "../PageTitle";

function RecentTransactionSection() {
  return (
    <div className="recent_transaction_area mt-30">
      <PageTitle text="Recent Transactions" />
      <div className="recent_transaction_inner_area border_linear">
        {TransactionData.length > 0 ? (
          TransactionData.map((item) => {
            return (
              <div className="transaction_item d-flex-between" key={item.id}>
                <div className="current_grid">
                  <div className="currency_icon">
                    <img src={item.currencyIcon} alt="currency icon" />
                  </div>
                  <div>
                    <h3>{item.currencyAmmount}</h3>
                    <h4>{item.currencyTotalAmmount} </h4>
                  </div>
                </div>
                <h3>{item.transctionAmmount} </h3>
              </div>
            );
          })
        ) : (
          <h3>
            <b>No Transction</b>{" "}
          </h3>
        )}
      </div>
    </div>
  );
}

export default RecentTransactionSection;
