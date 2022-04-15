import React,{Component} from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           cid: "",
            pname: "",
            pdesc: "",
            prating: "",
            pqty: "",
            pprice: "",
            pimg: "",
            cat: [],
            selectedOption:"",
            selectedOption1:"",
            //selectedFile: null,
            error: {
                ciderr:"",    
                pnameerr:"",
                pdesceerr: "",
                pratingerr: "",
                pqtyerr: "",
                ppriceerr: "",
                ratingerr: "",
                pimgerr:""
            }
        }
        this.handleOption = this.handleOption.bind(this);
        this.handleOption1 = this.handleOption1.bind(this);

    }

   /*  onFileChange = event => {
    
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      }; */

    handleChange = (a) => {
        const input = a.target;
        const nm = input.name;
        let val;
        const patterncid=/^[0-9]$/;
        let error = this.state.error;
        if (nm === "cid") {
            val = input.value;
            if (val.length < 1) {
                error.ciderr = "package id cant be zero";
            }
            else {
                error.ciderr = "";
            }
        }
        else {
            if (nm === "pdesc") {
                val = input.value;
                if (val.length < 10 && val.length > 100) {
                    error.pdesceerr = "Description should be in between 10 to 100 Characters";
                }
                else {
                    error.pdesceerr = "";
                }
            }
            else {
                if (nm === "pname") {
                    val = input.value;
                    if (val.length < 5) {
                        error.pnameerr = "Product Name too short";
                    }
                    else {
                        error.pnameerr = "";
                    }
                }
                else {
                    if (nm === "prating") {
                        val = input.value;
                        if (!(patterncid.test(val))) {
                            error. pratingerr = "Charactors not allowed";
                        }
                        else {
                            error. pratingerr = "";
                        }
                    }
                    else {
                        if (nm === "pqty") {
                            val = input.value;
                                if (val.length < 1) {
                                    error.pqtyerr = "Invalid Quantity";
                                }
                                else {
                                    error.pqtyerr = "";
                                }

                        }
                        else {
                            if (nm === "pprice") {
                                val = input.value;
                                if  (!(patterncid.test(val))) {
                                    error.ppriceerr = "Invalid price";
                                }
                                else {
                                    error.priceerr = "";
                                }
                            }
                            else {
                                if (nm === "pimg") {
                                    val = input.value;
                                    if (this.state.value1 == null) {
                                        error.pimgerr = "cant be null";
                                    }
                                    else {
                                        error.pimgerr = "";
                                    }
                                }
                        }
                    }
                }
            }
        }
        this.setState({ error, [nm]: val })
    }
    }

   /* handleOption= selectedOption => {
        this.setState({ selectedOption });
        console.log('Option selected:',selectedOption);
      };  */
      
      handleOption(e) {
        console.log("Selected!");
        this.setState({ selectedOption: e.target.value });
        console.log(this.state.selectedOption);
      };
      handleOption1(e) {
        console.log("Selected!!");
        this.setState({ selectedOption1: e.target.value });
        console.log(this.state.selectedOption1);
      };

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.selectedOption);
        console.log(this.state);
        let sign=JSON.parse(localStorage.getItem('data1'));
        //console.log(sign.vid);

        // Create an object of formData
        //const formData = new FormData();
         // Update the formData object
        /*  formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
          );
            // Details of the uploaded file
        console.log(this.state.selectedFile); */
      


       const url="http://localhost:8080/vaddproduct?cname="+this.state.selectedOption+"&ctype="+this.state.selectedOption1+"&pname="+this.state.pname+"&pdesc="+this.state.pdesc+"&pprice="+this.state.pprice+"&prating="+this.state.prating+"&pqty="+this.state.pqty;
        fetch(url,{method:"POST"})
            .then(resp => resp.json())

            //console.log(this.data)
            .then(data =>this.setState({ st: data, success: true }))
        
       window.location.href="/admin";
    } 
    /* onFileSelect =(file) => {
        setImageFile(URL.createObjectURL(file))
        setImage(file)
    } */

    componentDidMount() {
        fetch('http://localhost:8080/getallcategory')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                this.setState({
                    cat: data,
                });
                console.log(this.state.cat);
            });
    }
   
     
   
    render() {
        return (
            <div className='register'>
                <div className='register_container'>
                    <form >
                        {/*<div><select value={selectedOption} onChange={this.handleOption} options={optionItems}>{optionItems}</select></div>*/}
                        <select value={this.state.selectedOption} id='selectedOption'  name="selectedOption" onChange={this.handleOption}>{ this.state.cat.map((options) => (<option value1={options.cname}>{options.cname}</option>))}</select>
                        <select value={this.state.selectedOption1} id='selectedOption1'  name="selectedOption1" onChange={this.handleOption1}>{ this.state.cat.map((options) => (<option value2={options.ctype}>{options.ctype}</option>))}</select>
                        <h5>Product Title</h5><input id='pname' type='text' name="pname" value={this.state.pname} onChange={this.handleChange} /><br />

                        <h5>Description</h5><input id='pdesc' type='text' name="pdesc" value={this.state.pdesc} onChange={this.handleChange} /><br />
                        <h5>Rating</h5><input type='int' id='prating' name="prating" value={this.state.prating} onChange={this.handleChange} /><br />
                       
                        <h5>Quantity</h5><input type='number' id='pqty' name="pqty" value={this.state.pqty} onChange={this.handleChange} /><br />
                        <h5>Price</h5><input type='float' id='pprice' name="pprice" value={this.state.pprice} onChange={this.handleChange} /><br />
                        {/* <h5>Product Image</h5><input type='file'   onChange={this.onFileChange} /><br /> */}
                        <Link to="/admin"> <button   type="submit" value="Submit" onClick={this.submitForm}>Add Product</button></Link><br />
                    </form>
                    {/* <span>{this.state.error.titleerr}{this.state.error.describeerr}{this.state.error.sizeerr}{this.state.error.branderr}<br />
                        {this.state.error.imageerr}{this.state.error.priceerr}</span> */}
                </div>
            </div>

        )
    }
}

