import React, { useState, useMemo ,useEffect} from 'react';
import styled from 'styled-components';
import bg from '../src/img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthButtons from './Front/Buttons';
import Login from './Front/Login';
import Signup from './Front/Signup';
import Header from './Front/Header';
import Text from './Front/Text'


function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  // const check =()=>{
  //   const token=localStorage.getItem('token');
  //   if(token){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  // useEffect(() => {
  //   // Check if the user is logged in when the component mounts
  //   setIsAuthenticated(check());
  // }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <Router>
        
          
            <>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/" element={<Navigate to="/Dashboard" />} />
              </Routes>
            </>
            <>
            <Routes>
              <Route
                path="/Dashboard"
                element={
                  <MainLayout>
                    <Navigation active={active} setActive={setActive} />
                    <main>{displayData()}</main>
                  </MainLayout>
                }
              />
              <Route path="/Dashboard" element={<Navigate to="/Dashboard" />} />
              </Routes>
            </>
        
      </Router>
    </AppStyled>
  );
}

const Home = ({ setIsAuthenticated }) => {
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <>
      {orbMemo}
      <Header />
      <Text />
      <AuthButtons setIsAuthenticated={!setIsAuthenticated} />
    </>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
