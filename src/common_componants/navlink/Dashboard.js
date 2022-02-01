import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { pdata } from "./Test";
import "./Dashboard.css";

const data = {
  labels: ["july1", "july2", "july3", "july4", "july5", "july6", "july7"],

  datasets: [
    {
      label: "label1",

      data: [33, 53, 85, 41, 44, 65, 65],

      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      options: {
        label1: {
          position: "top",
          align: "start",
        },
      },
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <div className="chartoption">dgfds</div>
        <div className="dashboard">
          <Line data={data} />
        </div> */}
        <div className="row">
          <div className="chartoption col-lg-3 me-5">fhgyu</div>
          <div className="chartoption col-lg-3 me-5">fhgyu</div>
          <div className="chartoption col-lg-3 me-5">fhgyu</div>
        </div>

        <div className="row dashboard">
          <div className="col-lg-11">
            <Line height={100} data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
