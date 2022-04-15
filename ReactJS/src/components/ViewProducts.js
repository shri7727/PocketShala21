import React from 'react'
import '../compheader.css';

export default class ViewProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getallproducts")
            .then(resp => resp.json())
            .then(data => this.setState({ to: data }));

    }
    render() {
        const to1 = this.state.to.length;
        return (
            <div>
            { to1 != 0
                ? <div className='vhome'>
                    <div className='vhome_container'>
                        <div className='vhome_row'>
                            <table>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Title</th>
                                    <th>Product Describe</th>
                                    <th>Product Price</th>
                                    <th>Product Rating</th>
                                    {/* <th>Product Quantity(units)</th> */}
                                    {/* <th>Product image</th> */}
                                </tr>
                                {
                                    this.state.to.map(
                                        (o) => {
                                            return (
                                                <tr>
                                                    <td>{o.pid}</td>
                                                    <td>{o.pname}</td>
                                                    <td>{o.pdesc}</td>
                                                    <td>{o.pprice}</td>
                                                    <td>{o.prating}</td>        
                                                    {/* <td>{o.pqty}</td> */}
                                                    {/* <td>{o.pimg}</td> */}
                                                </tr>
                                            );
                                        }
                                    )
                                }
                            </table>
                        </div>
                        <div className='vhome_row'>Total Number Of Products:<br />{this.state.to.length}</div>
                    </div>
                </div>
                : < div style={{ textAlign: "center", color: "black" }}><h2>No Data</h2></div>
    }
    </div>
    )
}
}