import React, { Component } from 'react';  // new
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

// new
class App extends Component {
  // new
  constructor() {
    super();
    this.state = {
      users: [],
      username: '',
      email: '',
    };
    this.addUser = this.addUser.bind(this);  // new
    this.handleChange = this.handleChange.bind(this); //new
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
  addUser(event) {
    event.preventDefault();
    console.log('sanity check!');
    console.log(this.state);
  };
  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
  render() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">  {/* new */}
            <br/>
            <h1 className="title is-1">All Users</h1>
            <hr/><br/>
            <AddUser
            username={this.state.username}
            email={this.state.email}
            addUser={this.addUser}
            handleChange={this.handleChange}  // new
            />
            // new
            <br/><br/>  {/* new */}
            <UsersList users={this.state.users}/>
        </div>
       </div>
      </div>
    </section>
  <div className="field">
  <input
    name="username"
    className="input is-large"
    type="text"
    placeholder="Enter a username"
    required
    value={props.username}
    onChange={props.handleChange}  // new
  />
  </div>
  <div className="field">
    <input
     name="email"
     className="input is-large"
     type="email"
     placeholder="Enter an email address"
     required
     value={props.email}
     onChange={props.handleChange}  // new
     />
  </div>
  )
  };
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);