import React from 'react' 
import axios from 'axios'
class GithubUser extends React.Component {
    state = {}

    render(){
        return(<div><div className="head"><h1>My Github Profile</h1><div className="user">{this.props.userObj.login} <img src={this.props.userObj.avatar_url}/> </div>
       </div><h2>Followers</h2><div className="followers">

    {this.props.followers.length > 0 ? this.props.followers.map(el =>{ return <div className="singleuser"><img src={el.avatar_url}/><p>{el.login}</p> <a href={el.url}>Github Profile</a>{}</div>} ) : <div className="loader"></div>}</div></div>)
    

}
}
export default GithubUser