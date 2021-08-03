import logo from './logo.svg';
import './App.css';
import GithubUser from './Components/GithubUser';
import React from 'react'
import axios from 'axios'
class App extends React.Component {
  state = {user: [], followers: []}
  componentDidMount(){
    setTimeout(() => {axios.get('https://api.github.com/users/tetondan/followers').then(res => {
      this.setState({followers: res.data})
      console.log(this.state.followers)
    }) }, 2000)
    axios.get('https://api.github.com/users/muhannadbm').then(res => {
        this.setState({user: res.data})
    }).catch(e => console.log(e))

}
  render(){
  return (
    <div className="App">
      <GithubUser followers = {this.state.followers} userObj = {this.state.user}/>
    </div>
  ); }
}

export default App;
