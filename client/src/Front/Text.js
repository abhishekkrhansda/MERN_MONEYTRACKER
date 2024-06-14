import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const TextLine = styled.div`

   font-size: 80px;
  font-weight: bold;
  color: #007bff; /* Blue color */
  font-family: 'Arial', sans-serif; /* Choose a nice font family */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adds a subtle shadow for a stylish effect */
  letter-spacing: 1px; /* Adds some spacing between letters */
  margin: 20px 0; /* Adds some margin for spacing around the text */
`;

const Text = () => {
  return (
    <Container>
      <TextLine>
        Simple Way
      </TextLine>
      <TextLine>
        To Manage Finance
      </TextLine>
    </Container>
  );
};

export default Text;