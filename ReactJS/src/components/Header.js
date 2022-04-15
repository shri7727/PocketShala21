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
  flex: 1;
  display: flex;
  align-items: center;
`;




const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
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



function Header() {
    const [{basket}]=useStateValue();
    const [text,setText]=useState("");
    let textInput=React.createRef();
    localStorage.setItem('text',text);
    //console.log(JSON.parse(localStorage.getItem('data1')));
    let sign=JSON.parse(localStorage.getItem('data1'));
    let signOut= ()=>{
        if(sign!=null)
        {
            localStorage.removeItem('data1');
            window.location.href = '/login';
        }
    }
    console.log(sign);
    return (
        
        <Container>
            <Wrapper>
                <Left>
            <Link to="/">
              <SchoolOutlinedIcon size={500} style={{color:'black'}}/> 
            </Link>
           {/*  <MenuItem>
            <Link to="/Aboutus"style={{color:"Black"}}>
                Aboutus
            </Link>
            </MenuItem>
 */}
            <MenuItem>
            <Link to="/category" style={{color:"Black"}}>
              class 
            </Link>
            </MenuItem>

          {/*   <MenuItem>
            <Link to="/class" style={{color:"Black"}}>
                Class           
             </Link>
            </MenuItem>
             */}


          </Left>
            <Center>
           <Logo>Pocket Shala</Logo>           
            </Center>
            <Right>
            <MenuItem>
                
                    
                     <span className='header_optionLineOne'>Hello {!sign ?'User':sign.ufname}</span>
              </MenuItem>
              <MenuItem>
              <Link to={!sign && "/login"} style={{color:"Black"}}>
                     <span className='header_optionLineTwo' onClick={signOut}>{sign? 'Sign Out':'Sign In'}</span>
                    
                </Link> 
              </MenuItem>
              <MenuItem>
                <Link to="/checkout" style={{color:"Black"}}>
                    <div className='header_optionBasket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>                
                    </div>
                </Link> 
                </MenuItem>
            </Right>
            </Wrapper>    
            </Container>
    )
}

export default Header
