import React from 'react';
import {Card,CardImg} from 'reactstrap';


class Followers extends React.Component{


  render(){

    let styles = {margin: '2% 20%',padding:'2%',border:'5px solid #ededed'}
    return (
      

          
           <Card style={styles}>
             <CardImg src={this.props.follow.avatar_url}/>
             <h3>{this.props.follow.login}</h3>
             <a href={this.props.follow.html_url}>{this.props.follow.url}</a>
           </Card>
           
         
       
    );
  }
  }


export default Followers;
