import React from "react";
import Header from "../../components/HeaderComponent/Header";
import CardComponent from "../../components/CardComponent/CardComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Container } from "react-bootstrap";
import { MdOutlineCampaign } from "react-icons/md";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <ButtonComponent />
        <CardComponent />
      </Container>
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
