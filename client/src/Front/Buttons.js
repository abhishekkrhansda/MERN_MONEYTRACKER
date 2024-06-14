import React from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-color: #f0f0f0;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  gap:5px;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;

  &:hover {
    background-color: #c33d2e;
  }
`;

const FacebookButton = styled(Button)`
  background-color: #3b5998;

  &:hover {
    background-color: #2d4373;
  }
`;

const AuthButtons = () => {
    const history=useNavigate()
    const Navigate=(path)=>{
        history(path)
    }
  return (
    <Container>
    <Container1>
    <Button onClick={()=>Navigate('/Signup')}>Sign Up</Button>
    <Button onClick={()=>Navigate('/Login')}>Login</Button>
    </Container1>
     <Container1>
     <GoogleButton>Sign Up with Google</GoogleButton>
     <FacebookButton>Sign Up with Facebook</FacebookButton>
     </Container1>

    </Container>
  );
};

export default AuthButtons;


