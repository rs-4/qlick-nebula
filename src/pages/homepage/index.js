import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.section`
  background-color: #002f6c;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

const PageSubTitle = styled.h2`
  margin-bottom: 2rem;
`;

const WarningMessage = styled.p`
  color: #ff0000;
  margin-bottom: 2rem;
`;

const RedirectButton = styled.button`
  background-color: #ffffff;
  color: #002f6c;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ccc;
  }
`;

function HomePage() {
  const handleButtonClick = () => {
    window.location.href = "/panel/default";
  };

  return (
    <HomePageContainer>
      <PageTitle>Intégration de Qlik Sense avec React et Nebula.js</PageTitle>
      <PageSubTitle>
        Une premiere version pour de la visualisation de données via WebSockets.
      </PageSubTitle>
      <WarningMessage>
        Merci de vous connecter à la plateform Qlick Sense identifiants fournis.
      </WarningMessage>
      <RedirectButton onClick={handleButtonClick}>
        Aller au dashboard Nebula.JS X React.JS
      </RedirectButton>
    </HomePageContainer>
  );
}

export default HomePage;
