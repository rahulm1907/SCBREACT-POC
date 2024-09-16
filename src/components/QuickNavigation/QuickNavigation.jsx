import React from 'react'
import '../CardComponent/CardComponent.css'
import './QuickNavigation.css'
import { IoMdInformationCircleOutline } from "react-icons/io";


const QuickNavigation = () => {
  const quickNavigationItems = [
    {
      title: "Create Payments",
      description: "Make a new domestic or international payment",
    },
    {
      title: "Create Payee",
      description: "Create a new beneficiary with details to receive payment",
    },
    {
      title: "View Account Balance",
      description: "View balance and details of your account",
    },
    {
      title: "Manage Reports",
      description: "View, schedule and run reports",
    },
  ];

  return (
    <div className="card-outer-container">
      <div className="card-title-container">Quick Navigation</div>
      <ul className="card-body-container">
        {quickNavigationItems.map((navigationItem, index) => (
          <div key={index}>
            <li  className='d-flex justify-content-between align-items-center'>
              <div>
                <div className="navigation-item-title">{navigationItem.title}</div>
                <div className="navigation-item-description">{navigationItem.description}</div>
              </div>
              <span>
              <IoMdInformationCircleOutline size={30}/>
              </span>
            </li>
            <hr className="horizontal-line" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default QuickNavigation