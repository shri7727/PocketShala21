import React from 'react'
import '../Checkout.css';
import { Link} from 'react-router-dom';
import Subtotal from './Subtotal';
import {useStateValue} from './Stateprovider';
import CheckoutProduct from './CheckoutProduct.js';
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useHistory} from "react-router-dom";
//import Header from './Header';
//import Announcement from './Announcement';
//import Footer from './Footer';



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


function Checkout() {
    const [{basket}]=useStateValue();
    let sign=JSON.parse(localStorage.getItem('data1'));
    const history=useHistory();
    return (
        /* <div className="checkout">
            <div className='checkout_left'>
                {/* <img className='checkout_ad' src={baner} alter="baner"/> 
                <div>
                    //<h3> Hello {!sign ?'User':sign.ufname}</h3>
                    //<h4 className='checkout_title'>Your Shopping Basket</h4>
                    {/*CheckOutProduct
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.pname}
                        image={item.pimg}
                        price={item.pprice}
                        rating={item.prating}/>
                    ))}
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
               
            </div>
        </div> */
        <Container>
      <Wrapper>
      <TopTexts style={{textAlign:'center'}}>  Hello {!sign ?'User':sign.ufname} </TopTexts>
        <Title>YOUR BAG</Title>
        
        <Top>
        <Link to="/" >
          <TopButton >CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({basket.length})</TopText>
            
          </TopTexts>
          <TopButton type="filled" onClick={e=>history.push('/payment')}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
            {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.pname}
                        image={item.pimg}
                        price={item.pprice}
                        rating={item.prating}/>
                    ))}
              
            </Product>
            <Hr />
          </Info>
          <Subtotal />
        </Bottom>
      </Wrapper>
    </Container>
    )
}

export default Checkout
