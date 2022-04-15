import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cname: "",
            ctype: "",
        }
    }

    handleChange = (a) => {
        //this.setState({ cname: a.target.cname });
        this.setState({ ctype: a.target.value });
        //console.log(this.state.cname);
        console.log(this.state.ctype);

    }
    handleChange1 = (a) => {
        this.setState({ cname: a.target.value });
        console.log(this.state.cname);

    }
    submitForm = (e) => {
        e.preventDefault();
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cname: this.state.cname,
            ctype: this.state.ctype,
           
        })
    };

    fetch("http://localhost:8080/savecategory",reqData)
    .then(resp => resp.json())
    .then(data => this.setState({st: data, success: true}));
    window.location.href="/admin";
    }
    render() {
        return (
            <div className='register'>
                <div className='register_container'>
                    <form >
                        <h5>Category Name</h5><input type="text" name="cname" value={this.state.cname} onChange={this.handleChange1} /><br />
                            <div className="category_type">
                            <h5>Select Class</h5><input type="radio" value="1st" id="1st" onChange={this.handleChange} name="ctype" /><label for="1st">1st</label>
                            <input type="radio" value="2nd" id="2nd" onChange={this.handleChange} name="ctype" /><label for="2nd">2nd</label>
                            <input type="radio" value="3rd" id="3rd" onChange={this.handleChange} name="ctype" /><label for="3rd">3rd</label>
                            <input type="radio" value="4th" id="4th" onChange={this.handleChange} name="ctype" /><label for="4th">4th</label>
                            <input type="radio" value="5th" id="5th" onChange={this.handleChange} name="ctype"/><label for="5th">5th</label>
                            <input type="radio" value="6th" id="6th" onChange={this.handleChange} name="ctype"/><label for="7th">6th</label>
                            <input type="radio" value="7th" id="7th" onChange={this.handleChange} name="ctype"/><label for="7th">7th</label>
                            <br />
                            </div>
                        <Link to="admin"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Add Category</button></Link><br />
                    </form>
                </div>
            </div>

        )
    }
}