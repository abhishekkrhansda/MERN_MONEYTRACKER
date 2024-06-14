import React from 'react';
import styled from 'styled-components';

// Define styled components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const CompanyName = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/path/to/logo.png" alt="Company Logo" />
        <CompanyName>Company Name</CompanyName>
      </LogoContainer>
      <Nav>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
