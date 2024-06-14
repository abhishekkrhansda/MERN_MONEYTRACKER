// // Login.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import {useGlobalContext} from '../context/globalContext'


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f0f0;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   background: #fff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Input = styled.input`
//   padding: 0.5rem;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100%;
// `;

// const Button = styled.button`
//   padding: 0.75rem;
//   font-size: 1rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 0.875rem;
// `;

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: ""
//   });
 
//   const {login}=useGlobalContext();

//   const [error, setError] = useState('');

//   // const history=useNavigate()
//   // const Navigate=(path)=>{
//   //     history(path)
//   // }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };


//   const handleSubmit = async (e) => {
//     // e.preventDefault();
//     // try {
//     //   const response = await axios.post("http://localhost:5000/api/login", formData);
//     //   if(response){
//     //     Navigate('/Dashboard')
//     //   }
//     //   // handle success (e.g., redirect to another page or show a success message)
//     // } catch (error) {
//     //   console.log("something wrong with login")
//     //   setError(error.response.data.message);
//     // }

//     //login function
//     await login(formData);
//   };

//   return (
//     <Container>
//       <Form >
//         <Input 
//           type="text" 
//           name="username" 
//           placeholder="Username" 
//           value={formData.username} 
//           onChange={handleChange} 
//           required 
//         />
//         {/* <Input 
//           type="email" 
//           name="email" 
//           placeholder="Email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         /> */}
//         <Input 
//           type="password" 
//           name="password" 
//           placeholder="Password" 
//           value={formData.password} 
//           onChange={handleChange} 
//           required 
//         />
//         <Button type="submit" onClick={handleSubmit}>Login</Button>
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//       </Form>
//     </Container>
//   );
// };

// export default Login;





//-------------------------------------------------------------

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/globalContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { login, setError, error } = useGlobalContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    try {
      await login(formData);
      navigate('/Dashboard');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <Button type="submit">Login</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
};

export default Login;
