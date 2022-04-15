import React from 'react';
import '../Login.css';
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
    url("https://i.ibb.co/S06CDxY/fergotpass1.jpg")
      center;
  background-size: 1400px ;
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

function ForgetPassword() {
    let textInput1=React.createRef();
    
    const proceed= ()=>{
        localStorage.setItem('text1',textInput1.current.value);
        const number=JSON.parse(localStorage.getItem('text1'));
        const url = "http://localhost:8080/forgotpwdcust?ucontactno="+number;
        fetch(url)
                .then(response => response.json())
                .then(data => 
                    {
                        console.log(data);
                        if (data)
                        {
                            localStorage.setItem('data2',JSON.stringify(data));
                            console.log(localStorage.getItem('data2'));
                            localStorage.removeItem("text1");
                            window.location.href = '/reset';
                        }
                        else
                        {
                            alert("Wrong Contact Number");
                            window.location.href = '/login';
                        }
                    });
       } 
    return (
        
        /* <div className='login'>
            <Link to="/">
            <SchoolOutlinedIcon />
            </Link>
            <div className='login_container'>
                <h5>Enter Your Contact Number</h5>
                <form>
                <input ref={textInput1} type="text" /><br/>
                <button type="submit" onClick={proceed}>Proceed</button><br/>
                </form>
                </div>
            </div> */
            <Container>
                <Wrapper>
                <Link to="/">
                    <SchoolOutlinedIcon style={{color:'black'}}/>
                </Link>
                     <Title>Fergot Password</Title>
                     <Form>
                     <Input placeholder="Enter Your Contact Number" ref={textInput1} type="text" />
                     
                     <Button type="submit" onClick={proceed}>PROCEED</Button>
                     
                    </Form>
                </Wrapper>
             </Container>
    )
}
export default ForgetPassword;