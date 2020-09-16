import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';


class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users?client_id=26d9c627c72b046d466f&client_secret=$c62664ff4351924d097f0cf8108b6ff01e31571e`);
    console.log(res.data)
    this.setState({users: res.data, loading: false})
  }
  searchUsers = async(text)=>{
    console.log(text, 'From APP.js')
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=26d9c627c72b046d466f&client_secret=$c62664ff4351924d097f0cf8108b6ff01e31571e`);
    this.setState({ users: res.data.items, loading: false})
  }
  render() {
    return (
      <div>
        <NavBar title="GitHub Finder"/>
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;