import React from 'react';
import axios from 'axios'
import {Card,CardImg} from 'reactstrap';
import './App.css';
import Followers from './components/followers'
import User from './components/user'

class App extends React.Component{

  constructor(){
    super();
    console.log('constructor')
    this.state= {
        user:[],
        followers:[],
    }
}
    
  componentDidMount =()=>{

    
      axios
      .get(`https://api.github.com/users/mohamed-essamaali`)
      .then(res=>{
          this.setState({...this.state, user:res.data});
          console.log('users of axios',res.data)
      })
      .catch(err=>{
          console.log('users axios errors',err)
      })

      
      .then()
      axios
      .get(`https://api.github.com/users/mohamed-essamaali/followers`)
      .then(res=>{
        this.setState({...this.state,followers:res.data})
        console.log('followers of axios',res.data)
      })
      .catch(err=>{
        console.log('followers axios errors',err)
      })
  
   
   
}
  render(){
    console.log('render')
   
    return (
      <div className="App">
        
           <User user={this.state.user}/>
       

          <h2>Here is the list of my Followers</h2>
        {this.state.followers.map(el=>{
         return  <Followers follow={el}/>
        })}
          
        
        
      </div>
    );
  }
  }


export default App;
