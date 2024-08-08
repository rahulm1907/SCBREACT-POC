import React from "react";
import PaymentPendingApproval from "../PaymentPendingApproval/PaymentPendingApproval";
import PriorityMessage from "../PriorityMessage/PriorityMessage";
import QuickNavigation from "../QuickNavigation/QuickNavigation";
import PendingTasks from "../PendingTasks/PendingTasks";
import PastPayments from "../PastPayments/PastPayments";
import "./CardComponent.css"

const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="card-component card1">
        <PaymentPendingApproval />
      </div>
      <div className="card-component card2">
        <PriorityMessage />
      </div>
      <div className="card-component card3">
        <QuickNavigation />
      </div>
      <div className="card-component card4">
        <PendingTasks />
      </div>
      <div className="card-component card5">
        <PastPayments />
      </div>
    </div>
  );
};

export default CardComponent;
