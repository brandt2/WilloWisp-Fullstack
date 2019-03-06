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

  componentDidMount(){
    this.props.fetchPhotos();
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    debugger
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
    
    let photos = this.props.photos.map(photo => {
      if (photo.owner_id == this.props.currentUserId) {
        return(
          <div className="checkboxes">
            <input type="checkbox" id={photo.id} name="photos" value={photo}/>
            <label for={photo.id}><img className="click-me" src={photo.photoUrl} alt="" /></label>
          </div>
          // <li key={photo.id}><img className="photo-show-image" src={photo.photoUrl} alt="" /></li>
        )
      }
    })

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

        <div className="checkerbox">
          {photos}
        </div>

        <button onClick={this.handleSubmit}>Create Album</button>
      </form>
    )
  }

}

export default CreateAlbumForm;