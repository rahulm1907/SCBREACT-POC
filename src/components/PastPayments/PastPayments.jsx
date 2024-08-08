import React, { useState } from "react";
import "../CardComponent/CardComponent.css";
import "../PastPayments/PastPayments.css";
import { CiFilter } from "react-icons/ci";
import { MdCached, MdOpenInFull } from "react-icons/md";
import PaymentBarChart from "../PaymentBarChart/PaymentBarChart";

const PastPayments = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="card-outer-container">
      <div className="card-title-container">
        <div className="d-flex justify-content-between">
          <div>Payments in Last 7 days (my view)</div>
          <div>
            <CiFilter size={25} className="me-2" />
            <MdOpenInFull size={25} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="tabs">
          <button
            className={`w-50 ${activeTab === 0 ? "activeTab" : ""}`}
            onClick={() => changeTab(0)}
          >
            CLIENT WORKFLOW
          </button>
          <button
            className={`w-50 ${activeTab === 1 ? "activeTab" : ""}`}
            onClick={() => changeTab(1)}
          >
            BANK WORKFLOW
          </button>
        </div>
        <div>
          <div>
            {activeTab === 0 && (
              <div className="bar-chart-container">
                <PaymentBarChart
                  chartLabel="Processed by Bank"
                  value={25}
                  color="#3de98d"
                />
                <PaymentBarChart
                  chartLabel="Rejected by Bank"
                  value={14}
                  color="#21adfe"
                />
              </div>
            )}
            {activeTab === 1 && (
              <div className="bar-chart-container">
                <p>No Data</p>
              </div>
            )}
          </div>
          <div className="date-footer">
            <MdCached size={20} className="me-2"/>
            <p className="m-0 refresh-data">
              Last Updated 17/07/2024 04:09:44 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPayments;
