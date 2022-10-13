import PageTitle from "../Components/PageTitle";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

function Bitcoin() {
  useDocumentTitle("Bitcoin");

  const data = [
    {
      name: "2017",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "2018",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "2019",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "2020",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "2021",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "2022",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
  return (
    <section className="bitcoin_wrapper">
      <PageTitle text="Bitcoin" />
      <div className="bitcoing_grid">
        <div className="bar_chart_area">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="bar_chart_area">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Bitcoin;
