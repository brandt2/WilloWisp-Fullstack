import React from 'react';

class CreateAlbumForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const album = Object.assign({}, this.state);
    this.props.createAlbum(album)
      .then( () => this.props.history.push("/albums"))
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render (){
    return (
      <form>
        {this.renderErrors()}
        <input type="text"
          value={this.state.title}
          onChange={this.handleInput('title')}
          placeholder="Add a title"
        />

        <input type="text"
          value={this.state.description}
          onChange={this.handleInput('description')}
          placeholder="Add a description"
        /> 

        <button onClick={this.handleSubmit}>Create Album</button>
      </form>
    )
  }

}

export default CreateAlbumForm;