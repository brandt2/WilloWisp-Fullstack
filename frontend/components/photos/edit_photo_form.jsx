import React from 'react'

class EditPhotoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: this.props.photo.title,
      description: this.props.photo.description
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId);
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = Object.assign({}, this.state);
    this.props.updatePhoto(photo)
      .then( () => this.props.history.push("/photos"))
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

  render(){
    return (
      <div>
        <form>
          <h2>Edit Photo</h2>
          <br />
          {this.renderErrors()}
          <input type="text"
            value={this.state.title}
            onChange={this.handleInput('title')}
          />

          <input type="text"
            value={this.state.description}
            onChange={this.handleInput('description')}
          />

          <button onClick={this.handleSubmit}>Edit photo</button>
        </form>
      </div>
    )
  }

}

export default EditPhotoForm;