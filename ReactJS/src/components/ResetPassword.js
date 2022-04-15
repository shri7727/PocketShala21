import React from 'react';
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
    url("https://i.ibb.co/CHFXDzs/fergotpass.jpg")
      center;
     
  background-size:contain ;
 
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
    let textInput2=React.createRef();
    const reset=()=>{
        localStorage.setItem('text2',textInput1.current.value);
        const pwd=JSON.parse(localStorage.getItem('text2'));
        localStorage.setItem('text3',textInput2.current.value);
        const pwd1=JSON.parse(localStorage.getItem('text3'));
        if(pwd!=pwd1)
        {
            alert("Password Don't Match");
        }
        const sign=JSON.parse(localStorage.getItem('data2'));
        //console.log(sign,pwd);
        const url = "http://localhost:8080/resetpwd?uid="+sign.uid+"&newpwd="+pwd;
        //alert(url);
        fetch(url)
                .then(response => response.json())
                .then(data => 
                    {
                        console.log(data);
                });
                localStorage.removeItem('text2');
                localStorage.removeItem('text3');
                localStorage.removeItem('data2');
                alert("Password Updated Successfully");
                window.location.href = '/';
    }
    return (
            <Container>
            <Wrapper>
            <Link to="/">
            <SchoolOutlinedIcon style={{color:'black'}}/>
            </Link>
              <Title>Reset Password</Title>
              <Form>
                <Input placeholder="Enter New Password" ref={textInput1} type="password"  />
                <Input placeholder="Reenter New Password"  ref={textInput2} type="password" />
                <Button type="submit" className='Success' onClick={reset}>Reset</Button>
              </Form>
            </Wrapper>
          </Container>
    )
}
export default ForgetPassword;