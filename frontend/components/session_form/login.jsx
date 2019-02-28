import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.currentTarget.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  handleDemo(e){
    e.preventDefault();
    const user = Object.assign({}, {username: "demo", password: "password"});
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>

          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <button onClick={this.handleSubmit}>Log In</button>

          <button onClick={this.handleDemo}>Demo Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;