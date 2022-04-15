import React from 'react';
import {Link ,useHistory} from 'react-router-dom';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import styled from "styled-components";
import { mobile } from "../responsive";
 
 const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
       rgba(255, 255, 255, 0.5),
       rgba(255, 255, 255, 0.5)
     ),
     url("https://i.ibb.co/L8jtBBy/reg.jpg")
       center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
 `;
 
 const Wrapper = styled.div`
   width: 40%;
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
   flex-wrap: wrap;
 `;
 
 const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
 `;
 
 const Agreement = styled.span`
   font-size: 12px;
   margin: 20px 0px;
 `;
 
 const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
 `;

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            fname:"",
            lname:"",
            email:"",
            paddress:"",
            saddress:"",
            contactno:"",
            password:"" , 
            repassword:"",
            error:{
                fnameerr:"",
                emailerr:"",
                pwassworderr:"" , 
                repassworderr:"",
                lnameerr:"",
                paddresserr:"",
                saddresserr:"",
                conatctno:""
            }
        }
  
    }
    handleChange = (a) =>{
        const input = a.target;
        const nm = input.name;  
        const patternemail=/^[A-za-z0-9.]{5,}@[a-z0-9]{3,}\.[a-z]{3,}$/;
        const patternpwd=/^[A-Za-z@!#$%.]{1,}[A-Za-z@!#$%.]{2,}[A-Za-z@!#$%*.]{3,}$/;
        let val; 
        let error = this.state.error;
        if(nm==="fname")
        {
            val=input.value;
            if(val.length<3)
            {
                error.fnameerr="Too short first Name";
            }
            else
            {
                error.fnameerr="";
            }
        }
        else
        {
            if(nm==="lname")
            {
                val=input.value;
                if(val.length<3)
                {
                    error.lnameerr="Too short last Name";
                }
                else{
                    error.lnameerr="";
                }
            }
            else
            {
                if(nm==="email")
                {
                    val=input.value;
                    if(!(patternemail.test(val)))
                    {
                        error.emailerr="Invalid Email";              
                    }
                    else
                    {
                        error.emailerr ="";
                    }   
                }
                else
                {
                    if(nm==="password")
                    {
                        val=input.value;
                        if(!(patternpwd.test(val)))
                        {
                            error.passworderr="Invalid Password";
                        }
                        else
                        {  
                            error.passworderr ="";
                        }   
                    }
                    else
                    {
                        if(nm==="repassword")
                        {
                            val=input.value;
                            if(this.state.password!=val)
                            {
                                error.repassworderr="Password Not Equal";
                            }
                            else
                            {
                                error.repassworderr ="";
                            }
                        }
                        else
                        {
                            if(nm==="paddress")
                            {
                                val=input.value;
                                if(val.length<5)
                                {
                                    error.paddresserr="Too short address";
                                }
                                else
                                {
                                    error.paddresserr="";
                                }
                            }
                            else{
                                if(nm==="contactno")
                                {
                                    val=input.value;
                                    if(val.length<10)
                                    {
                                        error.contactnoerr="Invalid Number";
                                    }
                                    else
                                    {
                                        error.contactnoerr="";
                                    }
                                }
                                else
                                {
                                    if(nm==="saddress")
                                   {
                                     val=input.value;
                                      if(val.length<5)
                                      {
                                        error.saddresserr="Too short address";
                                      }
                                      else
                                      {
                                        error.addresserr="";
                                      }
                                    }
                                  }
                            }
                        }
                    }
                }
            } 
        }
        this.setState({error,[nm]: val})
  
    }
    submitForm = (e)=>{
        e.preventDefault();
        console.log(this.state);
        const reqData = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ufname: this.state.fname,
                ulname: this.state.lname,
                ucontactno: this.state.contactno,
                upaddress: this.state.paddress,
                usaddress: this.state.saddress,
                uemail: this.state.email,
                upassword : this.state.password,
            })
        };
    
        fetch("http://localhost:8080/registercustomer",reqData)
        .then(resp => resp.json())
        .then(data => this.setState({st: data, success: true}));
        alert("")
        window.location.href="/login";
           
  }
  
        
    render(){
    return (
    <Container>
      <Wrapper>
      <Link to="/">
            <SchoolOutlinedIcon style={{color:'black'}}/>
            </Link>
        <Title>REGISTER</Title>
        <Form>
          <Input placeholder="name" type="text" required="true" name="fname" value={this.state.fname} onChange={this.handleChange}/>
          <Input placeholder="last name" type="text" name="lname" required="true" value={this.state.lname} onChange={this.handleChange}/>
          <Input placeholder="email" type="email" name="email" required="true" value={this.state.email} onChange={this.handleChange}/>
          <Input placeholder="perminant address" type="text" name="paddress"required="true" value={this.state.paddress} onChange={this.handleChange}/>
          <Input placeholder="shipping address" type="text" name="saddress" required="true" value={this.state.saddress} onChange={this.handleChange} />
          <Input  placeholder="Contact Number" type="number" name="contactno" required="true" value={this.state.contactno} onChange={this.handleChange}/>
          <Input  placeholder="password" type="password" name="password" required="true" value={this.state.password}  onChange={this.handleChange}/>
          <Input placeholder="confirm password" type="password" name="repassword" required="true" value={this.state.repassword} onChange={this.handleChange} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" className="btn btn-primary btn-block" onClick={this.submitForm}>CREATE</Button>
        </Form>
        <span style={{color:"red"}}>{this.state.error.fnameerr}{this.state.error.emailerr}{this.state.error.fnameerr}{this.state.error.lnameerr}{this.state.error.addresserr}<br/>
                {this.state.error.pwderr}{this.state.error.contactnoerr}</span>
      </Wrapper>
    </Container>
        
    )
}
}
