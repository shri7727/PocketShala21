import React from 'react'
import '../Home.css';
//import baner from '../BGIMG.png';
//import baner from '../Photo1.jpg';
import Photo2 from '../Photo2.jpg';
import Product from './Product.js';

export default class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount =()=>{
        fetch("http://localhost:8080/getallproducts")
        .then(resp => resp.json())
        .then(data => this.setState({to: data}));
        
        //alert(this.state.to);

    }
    render(){
    return (
        <div className='home'>
           <div className='home_container'>
             
                {
                        this.state.to.map(
                            (o) => {
                                    return(
                                        <div className='home_row'>
                                            <Product title={o.pname} price={o.pprice} describe={o.pdesc} rating={o.prating}/>
                                        </div>
                                    );
                            }
                        )
                }            
               
           </div>
        </div>
    )
}
}