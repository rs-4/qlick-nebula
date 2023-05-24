import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HomePageContainer = styled.div`
  background-color: #002F6C;
  color: #FFFFFF;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedirectButton = styled.button`
  background-color: #FFFFFF;
  color: #002F6C;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
`;

function HomePage() {

  const handleButtonClick = () => {
    window.location.href = '/panel';
  };

  return (
    <HomePageContainer>
      <div>
        <h1>Mon expérience avec Nebula.js et React.js</h1>
        <p>Configuration avec Qlik etc...</p>
        <RedirectButton onClick={handleButtonClick}>Aller à l'autre page</RedirectButton>
      </div>
    </HomePageContainer>
  );
}

export default HomePage;

