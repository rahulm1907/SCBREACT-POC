import React from "react";
import './PaymentPendingApproval.css'
import '../CardComponent/CardComponent.css'

const PaymentPendingApproval = () => {
  return (
    <div className="card-outer-container">
      <div className="card-title-container">PAYMENT - PENDING APPROVAL</div>
      <div className="card-body-container">
        <span className="payment-id">Q0022706</span> | Cut-off time 2 hrs from
        now
        <div className="payment-amount">KRW 701</div>
      </div>
    </div>
  );
};

export default PaymentPendingApproval;
