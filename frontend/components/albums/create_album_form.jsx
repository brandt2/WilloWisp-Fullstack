import React from 'react';

class CreateAlbumForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      photosId: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.currentTarget.value})
    }
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   const album = Object.assign({}, this.state);
  //   this.props.createAlbum(album)
  //     .then( () => this.props.history.push("/albums"))
  // }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('album[title]', this.state.title)
    formData.append('album[description]', this.state.description)
    formData.append('album[photo_ids]', this.state.photosId)
    this.props.createAlbum(formData)
      .then(() => this.props.history.push("/albums"))
  }

  // handleCheck(e){
  //   e.preventDefault()
  //   console.log(this.state);
  //   let copy = this.state.photosId.slice(0);
  //   copy.push(e.currentTarget.id);
  //   let value = this.state.photosId.slice(0).push(e.currentTarget.id);
  //   console.log(value);
  //   this.setState({
  //     photosId: copy
  //   })
  //   console.log(this.state);
  // }

  handleCheck(e){
    let copy = this.state.photosId.slice(0);
    let photoId = Number(e.currentTarget.id);
    if (copy.includes(photoId)){
      copy.splice(copy.indexOf(photoId), 1);
    } else {
      copy.push(photoId);
    }
    this.setState({
      photosId: copy
    });
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
    console.log("in render: ", this.state);
    let photos = this.props.photos.map(photo => {
      if (photo.owner_id == this.props.currentUserId) {
        return(
          <div className="checkboxes" key={photo.id}>
            <label >
              <input onClick={this.handleCheck} type="checkbox" id={photo.id} name="photos" value={photo}/>
              <img className="click-me" src={photo.photoUrl} alt="" />
            </label>
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

        <textarea
          value={this.state.description}
          onChange={this.handleInput('description')}
          placeholder="Add a description"
        ></textarea>

        <div className="checkerbox">
          {photos}
        </div>

        <button onClick={this.handleSubmit}>Create Album</button>
      </form>
    )
  }

}

export default CreateAlbumForm;