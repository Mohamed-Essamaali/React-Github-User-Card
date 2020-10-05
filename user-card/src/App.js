import React from 'react';
import axios from 'axios'
import './App.css';
import Followers from './components/followers'
import User from './components/user'

class App extends React.Component{

  constructor(){
    super();
    console.log('constructor')
    this.state= {
        user:'Mohamed-Essamaali',
        followers:[],
        newUser:''
    }
}
    
handleChange = e=>{
  e.persist();
  this.setState({...this.state,newUser:e.target.value})
  console.log('new user',this.state.newUser)
}
  
componentDidMount(){
  axios
  .get(`https://api.github.com/users/${this.state.user}`)
  .then(res=>{
      this.setState({ user:res.data});
      console.log('users of axios',res.data)
  })
  .catch(err=>{
      console.log('users axios errors',err)
  })

  
  .then()
  axios
  .get(`https://api.github.com/users/${this.state.user}/followers`)
  .then(res=>{
    this.setState({followers:res.data})
    console.log('followers of axios',res.data)
  })
  .catch(err=>{
    console.log('followers axios errors',err)
  })

}

     fetchUser =()=>{
      axios
      .get(`https://api.github.com/users/${this.state.newUser}`)
      .then(res=>{
          this.setState({ user:res.data});
          console.log('users of axios',res.data)
      })
      .catch(err=>{
          console.log('users axios errors',err)
      })

      
      .then()
      axios
      .get(`https://api.github.com/users/${this.state.newUser}/followers`)
      .then(res=>{
        this.setState({followers:res.data})
        console.log('followers of axios',res.data)
      })
      .catch(err=>{
        console.log('followers axios errors',err)
      })
  
    
     
   
   
}

  componentDidUpdate(prevProps,prevState){

    if(prevState.user!==this.state.newUser){
    
      console.log('ComDidUpdate called',this.state.user)
      
    }
  }
submitForm=e=>{
  e.preventDefault();
  this.setState({...this.state,newUser:this.state.newUser})
  console.log('form submitted',this.state.newUser);
  this.fetchUser();
}


  render(){
    console.log('render')
   
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
        <input type='text' placeholder='search for user' 
        name='newUser'
        value={this.state.newUser} 
        onChange={this.handleChange}/>
        <button >Search</button>
        </form>
    
        
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
