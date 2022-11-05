import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import PageTitle from "../PageTitle";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import walletData from "../../Data/WalletData";
import SelectComponent from "../SelectComponent";

function WalletSection() {
  const [change, setChange] = useState({
    id: 1,
    walletName: "ETH",
    balance: 21.5331,
    filterWallet: "eth",
    earningBalance: 7.048,
    spendingBalance: 2.013,
    dataEarning: [
      {
        name: "Point A",
        pv: 2400,
      },
      {
        name: "Point B",
        pv: 1398,
      },
      {
        name: "Point C",
        pv: 3500,
      },
      {
        name: "Point D",
        pv: 4208,
      },
      {
        name: "Point E",
        pv: 4500,
      },
      {
        name: "Point F",
        pv: 3800,
      },
      {
        name: "Point G",
        pv: 4300,
      },
    ],
    dataSpedning: [
      {
        name: "Point A",
        pv: 2400,
      },
      {
        name: "Point B",
        pv: 1398,
      },
      {
        name: "Point C",
        pv: 3000,
      },
      {
        name: "Point D",
        pv: 3908,
      },
      {
        name: "Point E",
        pv: 4800,
      },
      {
        name: "Point F",
        pv: 3800,
      },
      {
        name: "Point G",
        pv: 4300,
      },
    ],
  });

  const options = [
    { value: "eth", label: "ETH" },
    { value: "btc", label: "BTC" },
  ];

  const handleChangeWallet = (e) => {
    walletData.filter((item) => {
      if (item.filterWallet == e.value) {
        setChange(item);
      }
    });
  };

  return (
    <div className="my_wallet_item_area">
      <PageTitle text={"My Wallet"} />
      <div className="my_wallet_item border_linear">
        <div className="wallet_title_area">
          <h5>Your Balance </h5>
          <h4
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {change.walletName}
            <VisibilitySensor partialVisibility offset={{ top: 100 }}>
              {({ isVisible }) => (
                <div
                  style={{ height: "100px", lineHeight: "100px", width: "45%" }}
                >
                  {isVisible ? (
                    <CountUp
                      start={0}
                      end={change.balance}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal="."
                    />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </h4>
        </div>
        <div className="text-center">
          <SelectComponent
            options={options}
            handleChange={handleChangeWallet}
            defaultValueIndex={0}
          />
        </div>
        <div className="wallet_chart_grid">
          <div className="wallet_chart_item">
            <div className="chart_title_area">
              <div className="chart_icon">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0914 16.0924V0.907227H12.2951V16.0924H16.0914ZM10.397 16.0924V5.6526H6.60069V16.0924H10.397ZM4.70255 16.0924V8.49982H0.90625V16.0924H4.70255Z"
                    fill="#0DDB84"
                  />
                </svg>
              </div>
              <h5>Earnings</h5>
            </div>
            <h4>
              {change.earningBalance} <span>{change.walletName}</span>
            </h4>
            <div className="wallet_chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={change.dataEarning}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#34D178"
                    strokeWidth={2}
                    dot={{
                      stroke: "rgba(13, 219, 132, 0.5)",
                      fill: "#0DDB84",
                      strokeWidth: 2,
                    }}
                    activeDot={{ r: 5 }}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#131313",
                      border: "1px solid #131313",
                    }}
                    labelStyle={{ color: "white" }}
                    cursor={false}
                    labelFormatter={(name) => "Number: " + name}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="wallet_chart_item">
            <div className="chart_title_area">
              <div className="chart_icon">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0914 16.0924V0.907227H12.2951V16.0924H16.0914ZM10.397 16.0924V5.6526H6.60069V16.0924H10.397ZM4.70255 16.0924V8.49982H0.90625V16.0924H4.70255Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
              <h5>Spendings</h5>
            </div>
            <h4>
              {change.spendingBalance} <span>{change.walletName}</span>
            </h4>
            <div className="wallet_chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={change.dataSpedning}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#FF0000"
                    strokeWidth={2}
                    dot={{
                      stroke: "rgba(255, 0, 0, 0.581)",
                      fill: "#FF0000",
                      strokeWidth: 2,
                    }}
                    activeDot={{ r: 5 }}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#131313",
                      border: "1px solid #131313",
                    }}
                    labelStyle={{ color: "white" }}
                    cursor={false}
                    labelFormatter={(name) => "Number: " + name}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletSection;
