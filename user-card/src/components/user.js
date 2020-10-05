import React from 'react'
import {Card,CardImg} from 'reactstrap';

class User extends React.Component{



    render(){
        let styles = {margin: '2% 20%',padding:'2%',border:'5px solid #ededed'}
        return (
            <Card style={styles}>
                <CardImg src={this.props.user.avatar_url}/>
                <h3>{this.props.user.login}</h3>
                <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
            </Card>
        )
    }
}
export default User



 