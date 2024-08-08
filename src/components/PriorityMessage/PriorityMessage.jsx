import React from "react";
import './PriorityMessage.css'

const PriorityMessage = () => {
  return (
    <div className="card-outer-container">
      <div className="card-title-container">PRIORITY MESSAGE</div>
      <div className="card-body-container">
        <div className="d-flex justify-content-center align-items-center priority-message-body">
        <div className="me-2">Bill Payments Report - Korea_Bill</div>
        <p className="priority-message-link m-0">
          All Messages
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default PriorityMessage;
