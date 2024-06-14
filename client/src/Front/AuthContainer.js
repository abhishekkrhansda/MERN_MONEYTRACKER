import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Box = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

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

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <Box>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <form>
          {!isLogin && <Input type="text" placeholder="Username" />}
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        <p>or</p>
        <GoogleButton>Sign Up with Google</GoogleButton>
        <FacebookButton>Sign Up with Facebook</FacebookButton>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <a href="/" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </a>
        </p>
      </Box>
    </Container>
  );
};

export default AuthContainer;
