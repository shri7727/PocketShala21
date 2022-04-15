import React ,{useState} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import {useStateValue} from './Stateprovider';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { color } from '@mui/system';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 0.9;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  background-color: black
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


function AdminHeader() 
{
    console.log(JSON.parse(localStorage.getItem('data1')));
    let sign=JSON.parse(localStorage.getItem('data1'));
    let signOut= ()=>{
        if(sign!=null)
        {
            localStorage.removeItem('data1');
            window.location.href = '/adminlogin';
        }
    }
    console.log(sign);
    return (
      <Container>
        <Wrapper>
            <Left>
              <MenuItem>
                <Link to="/">
                   <SchoolOutlinedIcon size={500} style={{color:'black'}}/> 
                </Link>
              </MenuItem>
              <MenuItem>
                <Logo>
                  Admin
                </Logo>
                </MenuItem>
            </Left>
        <Center>
        <MenuItem>
            <Link to="/addcategory" style={{fontSize:'18px',color:'black',textDecoration:'none'}} >
              Add Category  
            </Link>
        </MenuItem>
            
        <MenuItem>
            <Link to="/addproduct" style={{fontSize:'18px',color:'black',textDecoration:'none'}} >
              Add Products
            </Link>
        </MenuItem>

        <MenuItem>
            <Link to="/viewproducts" style={{fontSize:'18px',color:'black',textDecoration:'none'}}>
              Products
            </Link>
        </MenuItem>

        <MenuItem>
            <Link to="/viewcategory" style={{fontSize:'18px',color:'black',textDecoration:'none'}}>
              Categories
            </Link>
        </MenuItem> 

        <MenuItem>
            <Link to="/viewcustomer" style={{fontSize:'18px',color:'black',textDecoration:'none'}}>
              Customers
            </Link>
        </MenuItem>

        <MenuItem>
            <Link to="/vieworders" style={{fontSize:'18px',color:'black',textDecoration:'none'}}>
              Orders
            </Link>
        </MenuItem>
        </Center>
        <Right>
          <MenuItem>
              <span className='aheader_optionLineOne'>Hello    {!sign ?'Admin':sign.adminid}</span>
          </MenuItem>
          <MenuItem>
                  <Link to={!sign && "/adminlogin"}>
                     <span className='aheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' :'Sign In'}</span>
                  </Link>
          </MenuItem>
          
        </Right>
        </Wrapper>    
      </Container>
    )
}
export default AdminHeader;