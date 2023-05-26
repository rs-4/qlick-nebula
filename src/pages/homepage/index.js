import React from "react";
import styled from "styled-components";


const HomePageContainer = styled.div`
  background-color: #002f6c;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedirectButton = styled.button`
  background-color: #ffffff;
  color: #002f6c;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
`;

function HomePage() {
  const handleButtonClick = () => {
    window.location.href = "/panel/default";
  };

  return (
    <HomePageContainer>
        <RedirectButton onClick={handleButtonClick}>
          Aller à l'autre page
        </RedirectButton>
    </HomePageContainer>
  );
}

export default HomePage;
