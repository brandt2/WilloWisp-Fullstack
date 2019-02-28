import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.createNewUser(user)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="signup-session-form">
        <h2>Sign Up!</h2>
        <br/>
        <form>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <br />
          <label>First Name:
            <input type="text"
              value={this.state.fname}
              onChange={this.handleInput('fname')}
            />
          </label>
          <br />
          <label>Last Name:
            <input type="text"
              value={this.state.lname}
              onChange={this.handleInput('lname')}
            />
          </label>
          <br />
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;