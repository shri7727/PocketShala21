import React from 'react';
import {Link ,withRouter} from 'react-router-dom';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/c63hWv0/admin.jpg")
      center;
  background-size:cover ;
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


class AdminLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: "",
            adminid: "",
            apassword: ""
        }
    }

    handleChange = (e) => {
        const input = e.target;
        const nm = input.name;
        const val = input.value;
        this.setState({ [nm]: val });
    }

   signIn =(e)=>{
    let adminid = this.state.adminid;
    let apassword = this.state.apassword;

    const url = "http://localhost:8080/loginadmin?adminid=" + adminid + "&apassword=" + apassword;
    fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                    if(data!=null)
                    {
                        localStorage.setItem('data1',JSON.stringify(data));
                        window.location.href = '/admin';
                    }
                    else
                    {
                     alert("Wrong ID/Password");
                     window.location.href = '/adminlogin';
                    }
            });

   }
    
   render(){
    return (
      
        <Container>
        <Wrapper>
        <Link to="/">
            <SchoolOutlinedIcon style={{color:'black'}}/>
        </Link>
          <Title>Admin Login</Title>
          <Form>
            <Input placeholder="Admin Id" type='number' name="adminid" value={this.state.adminid}  onChange={this.handleChange} />
            <Input placeholder="password" type='password' name="apassword" value={this.state.apassword}  onChange={this.handleChange} />
            <Button  type="submit" onClick={this.signIn}>LOGIN</Button> 
          </Form>
        </Wrapper>
      </Container>
        
    )
   }
}

export default withRouter(AdminLogin);
