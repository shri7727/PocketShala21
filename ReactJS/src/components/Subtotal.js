import React from 'react';
import '../Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './Stateprovider';
import { getBasketTotal } from './reducer';
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


export default function Subtotal() {
    const history=useHistory();

    const [{basket}]=useStateValue();
    
    


    return (
        <Container>
            <Wrapper>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
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
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total Items</SummaryItemText>
              <SummaryItemPrice>{basket.length}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>
                  {(() => {
                     if ((getBasketTotal(basket)!=0) && (getBasketTotal(basket)<3000)) {
                        return (
                            <SummaryItemPrice> ₹ 200</SummaryItemPrice>
                                )
                            }
                      else {
                                 return (
                                    <SummaryItemPrice>₹ 0</SummaryItemPrice>
                                     )
                            }
                            })
                            ()}
                            
                </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>
              {(() => {
                     if (getBasketTotal(basket)>3000) {
                        return (
                            <SummaryItemPrice> -₹ 200</SummaryItemPrice>
                                )
                            }
                      else {
                                 return (
                                    <SummaryItemPrice>₹ 0</SummaryItemPrice>
                                     )
                            }
                            })
                            ()}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
              {(() => {
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
                            ()}
              </SummaryItemPrice>
            </SummaryItem>
            <Button onClick={e=>history.push('/payment')}>CHECKOUT NOW</Button>
          </Summary>
            </Wrapper>
        </Container>

    )
}
