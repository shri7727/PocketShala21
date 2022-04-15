import React ,{useState} from 'react';
import '../Payment.css';
import {useStateValue} from './Stateprovider';
import FinalView from './FinalView.js';
import {Link} from 'react-router-dom';
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import {useHistory} from "react-router-dom";
import styled from "styled-components";


import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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


function Payment() 
{
    const [{basket},dispatch]=useStateValue();
    const [data,setData]=useState("");
    let sign=JSON.parse(localStorage.getItem('data1'));
    const order= ()=>
    {
        if(sign!=null)
        {
        console.log(sign.uid);
        /* if(sign.uwallet<getBasketTotal(basket))
        {
            alert("Insufficient Balance");
            window.location.href="/addmoney";
        } 
        else{ */
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid:sign.uid,
                uname:sign.ufname,
                contactno:sign.ucontactno,
                address:sign.uaddress,
                totalprice:getBasketTotal(basket),
                qty:basket.length,
                products:basket
            })
        };
        console.log(sign);
        console.log(reqData);
        fetch("http://localhost:8080/saveMyOrder",reqData)
        .then(resp => resp.json())
        .then(data => setData(data));
        window.location.href="/placed";
        console.log(data);
    //}
    }
    else{
        alert("Please Login First");
            window.location.href="/login";
    }
    }   
     return (
        <div className='payment'>
            <div className='payment_container'>
                {/*Delivery address*/}
                <h1>
                    Checkout(
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{!sign ?'Guest':sign.ufname}</p>
                        <p>{!sign?'Pune':sign.usaddress}</p>
                    </div>
                </div>
                {/*Review ITEms*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item=>(
                            <FinalView id={item.pid}
                            title={item.pname}
                            image={item.pimage}
                            price={item.pprice}
                            rating={item.prating}
                            />
                        ))}
                    </div>
                </div>
                {/*Payment Method*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Total Amount</h3>
                        <p>{(() => {
                     if ((getBasketTotal(basket)!=0) && (getBasketTotal(basket)<3000)) {
                        return (
                            <SummaryItemPrice> <CurrencyFormat
                            renderText={(value)=>(
                                
                                    <SummaryItemPrice>
                                        {value}
                                    </SummaryItemPrice>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)+200}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                            </SummaryItemPrice>
                                )
                            }
                            else if(getBasketTotal(basket)==0) {
                                return (
                                   <SummaryItemPrice>₹ 0</SummaryItemPrice>
                                    )
                           }
                      
                            else {
                                 return (
                                    <SummaryItemPrice> <CurrencyFormat
                            renderText={(value)=>(
                                
                                    <SummaryItemPrice>
                                        {value}
                                    </SummaryItemPrice>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                            </SummaryItemPrice>
                                     )
                            }
                            })
                            ()}</p>
                    </div>
                    <div className='payment_details'>
                        <Button onClick={order}>Place Order</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment;
