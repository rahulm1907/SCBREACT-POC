import React from "react";
import Header from "../../components/HeaderComponent/Header";
import CardComponent from "../../components/CardComponent/CardComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { MdOutlineCampaign } from "react-icons/md";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="px-5">
        <ButtonComponent />
        <CardComponent />
      </div>

      <button className="feedback-button">
        <MdOutlineCampaign
          size={25}
          style={{
            transform: "rotate(50deg)",
          }}
        />
        Give feedback
      </button>
    </div>
  );
};

export default MainPage;
