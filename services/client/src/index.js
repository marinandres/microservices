import React, { Component } from 'react';  // new
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';

// new
class App extends Component {
  // new
  constructor() {
  super();
  // new
  this.state = {
    users: []
  };
};
  // new
  componentDidMount() {
    this.getUsers();
  };
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)  // new
    .then((res) => { this.setState({ users: res.data.data.users }); })
    .catch((err) => { console.log(err); });
  };
  render() {
render() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <br/>
            <h1 className="title is-1">All Users</h1>
            <hr/><br/>
            <UsersList users={this.state.users}/>
          </div>
        </div>
      </div>
    </section>
  )
=======

// new
class App extends Component {
  constructor() {
    super();
    this.getUsers();
  }
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br/>
              <h1 className="title is-1">All Users</h1>
              <hr/><br/>
            </div>
          </div>
        </div>
      </section>
    )
  }
>>>>>>> a25d4d2a68b6637a2685b2dba59376c901f5ce96
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
