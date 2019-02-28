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

  componentWillUnmount(){
    this.props.removeErrors()
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

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemo(e){
    e.preventDefault();
    const user = Object.assign({}, {username: "demo", password: "password"});
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="login-session-form">
        <form>
          <h2>Log in to Will-o'-Wisp</h2>
          <br/>
          {this.renderErrors()}
          <br/>
          <input type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder="Username"
            className="login-username"
          />

          <input type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password"
            className="login-password"
          />

          <button className="login" onClick={this.handleSubmit}>Log In</button>

          <button className="demo-login" onClick={this.handleDemo}>Demo Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;