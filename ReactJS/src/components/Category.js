/* import React from "react";
import '../Home.css';
import Photo2 from '../Photo2.jpg';
import Product from './Product.js';


class Category extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            sr: [],
            searcherror:" "
        }
    }
    componentDidMount =()=>{
        fetch("http://localhost:8080/1st")
        .then(resp => resp.json())
        .then(data => 
            {if(data.length!=0)
                {
                    console.log(JSON.stringify(data));
                    this.setState({sr: data})
                }
                else
                {
                    this.setState({searcherror: "Result not found :("});
                }
            });
    }

    render(){
        return(
            <div>
            <div className='home'>
                <div className='home_container'>    
                {
                        this.state.sr.map(
                            (o) => {
                                if(o.papprove==="true")
                                {
                                    return(
                                        <div className='home_row'>
                                         <Product id={o.pid} title={o.pname} price={o.pprice}  describe={o.pdesc}  rating={o.prating}/>
                                        </div>
                                    );
                                }
                            }
                        )
                } 
                <p> {this.state.searcherror} </p>
            </div>
           </div>
        </div>
        )
    }

}
export default Category; */

import React from "react";
import '../Home.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {Link} from 'react-router-dom';


class Category extends React.Component{

    render(){
        return(
            <div style={{}}>
    
      <table  className='center'>
          <tr>
              <td>
              <Card
               style={{
               width: 400,
               backgroundColor: "burlywood",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   First Standered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/First"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
              
              <td>
              <Card
               style={{
               width: 400,
               backgroundColor: "burlywood",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   Second Standered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/Second"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
              <td>
              <Card
               style={{
               width: 400,
               backgroundColor: "burlywood",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   Third Standered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/Third"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
          </tr>
          <tr>
              <td>
              <Card
               style={{
               width: 400,
               backgroundColor: "aquamarine",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   Fourth Standered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/Fourth"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
              
              <td>
              <Card
               style={{
               width: 400,
               backgroundColor: "aquamarine",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   FifthStandered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/Fifth"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
              <td>
              <Card
               style={{
               width: 400,
               backgroundColor: "aquamarine",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   Sixth Standered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/Sixth"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
          </tr>
          <tr>
          <td className="center">
              <Card
               style={{
               width: 400,
               backgroundColor: "yellow",
                }}
               >
                <CardContent>
         
                 <Typography variant="h5" component="h2">
                   Seventh Standered
                  </Typography>
                   <Typography
                     style={{
                      marginBottom: 12,
                      }}
                      color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                     <Typography variant="body2" component="p">
                     Stay Happy
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/Seventh"><Button size="small">View Products</Button></Link>
                     </CardActions>
                     </Card>
              </td>
          </tr>

      </table>
     
      
    </div>
  );
}
        
            
    }

export default Category;

