import React from 'react';
import '../Product.css';
import {useStateValue} from './Stateprovider';
import { popularProducts } from "../data";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  const Info1 = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
     display: flex; 
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  const Title = styled.h2`
    color:white;
    margin-bottom: 20px;
`;
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const Icon2 = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 60%;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: bottom;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const Desc = styled.p`
  margin: 50px 0px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 3px;
`;
function Product({id,title,describe,price,image,rating,item}) {
    const [{basket},dispatch]=useStateValue();
    //console.log("this is basket" ,basket);
    //let x=10;
    const addToBasket=() =>{
        //dispatch item in data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                pid:id,
                pname:title,
                pdesc:describe,
                pimg:image,
                pprice:price,
                prating:rating,
            },
        });
    };
    return (
        <Container>
            <Circle />
            
            <Info>
            {/*{popularProducts.map(() => (<img src={image} alt="productImg"/>))}*/}
               <Title>{title}</Title>
                <Desc>{describe}</Desc>
                <Desc>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </Desc>
                
                <Icon>
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}                    
                </Icon>
                <Icon2>
                    <ShoppingCartOutlined onClick={addToBasket}/>
                    </Icon2>
                </Info>
        </Container> 
      
    )
}

export default Product;
