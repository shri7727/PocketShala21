import React from 'react'
import '../compheader.css';

export default class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            to1: [],
            
           
        }
        this.accept = this.accept.bind(this);
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getallproductaudit")
            .then(resp => resp.json())
            .then(data => this.setState({ to1: data }));

    }
    
    render() {
        const to = this.state.to.length;
        const to1 = this.state.to1.length;
        return (
            <div>
                        <div>{to1 != 0 ?
                        <div className='vhome'>
                        <div className='vhome_container'>
                            <div className='vhome_row'>
                                <table>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Product Quantity</th>
                                        <th>Time</th>
                                        <th>Accept</th>
                                        <th>Deny</th>
                                    </tr>
                                    {
                                        this.state.to1.map(
                                            (o1) => {
                                                return (
                                                    <tr>
                                                        <td >{o1.pid}</td>
                                                        <td>{o1.pname}</td>
                                                        <td>{o1.pprice}</td>
                                                        <td>{o1.pqty}</td>
                                                        <td>{o1.ptime}</td>
                                                        <td><button onClick={() => { this.accept1(o1.pid, o1.pprice, o1.pqty) }}>Approve</button></td>
                                                        <td><button onClick={() => { this.deny1(o1.pid, o1.pprice, o1.pqty) }}>Deny</button></td>
                                                    </tr>
                                                );
                                            }
                                        )
                                    }
                                </table>
                            </div>
                            </div></div>
                    : <div style={{ textAlign: "center", color: "black" }}><h2>No New Product added</h2></div>
                }
                </div>
            </div>
        );
    }
}