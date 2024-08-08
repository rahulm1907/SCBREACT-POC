import React from "react";
import { Carousel } from "react-bootstrap";
import "./PendingTasks.css";
import { MdCached } from "react-icons/md";

const PendingTasks = () => {
  return (
    <div className="card-outer-container">
      <div className="card-title-container">15555 Pending tasks</div>
      <div className="card-body-container">
        <div className="tab">
          <button className="">CASH</button>
        </div>
        <div className="carousel-body-container">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="d-flex justify-content-between task-card">
                <div>
                  <h2>687</h2>
                  <p>Pending Send to bank</p>
                  <ul>
                    <li>Payments:687</li>
                  </ul>
                </div>
                <div>
                  <h2>8</h2>
                  <p>Pending Repair</p>
                  <ul>
                    <li>Payments:5</li>
                    <li>Payees:3</li>
                  </ul>
                </div>
                <div>
                  <h2>830</h2>
                  <p>Pending Authorization</p>
                  <ul>
                    <li>Payments:687</li>
                    <li>Payments Batches:11 </li>
                    <li>Payees:253</li>
                  </ul>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="task-card">
                <h2>830</h2>
                <p>Pending Authorization demo</p>
                <ul>
                <li>Payments:556</li>
                <li>Payments Batches:11 </li>
                <li>Payees:263</li>
                </ul>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="refresh-data-container">
          <MdCached size={20}/>
          <p className="m-0 refresh-data">Last Updated 17/07/2024 04:09:44 PM</p>
        </div>
      </div>
    </div>
  );
};

export default PendingTasks;
