import React, { useState} from 'react';

import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import { Link} from 'react-router-dom';
import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/kSgRrV6/2.png")
      center;
  background-size:250px ;
  display: flex;
    align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
 
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
`;
const Button2 = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: orange;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;



function LoginIn() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inputs;
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

   const signIn= ()=>{

    const url = "http://localhost:8080/logincustomer?uemail=" + email + "&upassword=" + password;
    fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                    if (data)
                    {
                        localStorage.setItem('data1',JSON.stringify(data));
                        window.location.href = '/';
                    }
                    else
                    {
                     alert("Wrong ID/Password");
                     window.location.href = '/login';
                    }
                });
   } 
    return (
        <Container>
            
      <Wrapper>
      <Link to="/" style={{color:'black'}}>
            <SchoolOutlinedIcon />
            </Link>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" type='text' name ="email" value={email} onChange={handleChange}/>
          <Input placeholder="password" type='password' name="password" value={password} onChange={handleChange} />
          <div style={{textAlign:'center'}}><Button  type="submit" onClick={signIn}>LOGIN</Button></div>
          
          <Link1 style={{textAlign:'center'}}><Link to="/forgetpass"><p onClick={()=> window.location.href = '/forgetpass'} >Forget Password</p></Link></Link1>
          <Link1 style={{textAlign:'center'}}><Link to="register" > CREATE YOUR POCKETtSHALA ACCOUNT </Link></Link1>
          <Link to="adminlogin" style={{textAlign:'center'}} ><Button2 > Admin Login</Button2></Link>
        </Form>
      </Wrapper>
    </Container>
        
    )

}
export default LoginIn;
