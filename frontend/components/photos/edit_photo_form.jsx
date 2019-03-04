import React from 'react'

class EditPhotoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: this.props.photo.id,
      title: this.props.photo.title,
      description: this.props.photo.description
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    let photoId = this.props.match.params.photoId
    this.props.fetchPhoto(photoId);
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
      .then( () => this.props.history.push(`/photos/${photo.id}`))
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
            placeholder={this.props.photo.title}
          />

          <input type="text"
            value={this.state.description}
            onChange={this.handleInput('description')}
            placeholder={this.props.photo.description}
          />

          <button onClick={this.handleSubmit}>Edit photo</button>
        </form>
      </div>
    )
  }

}

export default EditPhotoForm;