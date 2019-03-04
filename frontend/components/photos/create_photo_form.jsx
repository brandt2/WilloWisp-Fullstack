import React from 'react';

class CreatePhotoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.currentTarget.value})
    }
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   const photo = Object.assign({}, this.state);
  //   this.props.createPhoto(photo)
  //     .then( () => this.props.history.push("/photos"))
  // }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title)
    formData.append('photo[description]', this.state.description)
    if (this.state.photoFile){
      formData.append('photo[image]', this.state.photoFile)
    }
    this.props.createPhoto(formData)
      .then( () => this.props.history.push("/photos"))
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="upload-photo-div">
        <form className="upload-photo-form">
          <h2>Upload Photo</h2>
          <br/>
          {this.renderErrors()}
          <div className="upload-photo-field">
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              placeholder="Title"
            />

            <input type="text"
              value={this.state.description}
              onChange={this.handleInput('description')}
              placeholder="Description"
            />
          </div>

          <div className="upload-photo-photo">
            <div>Choose Photo</div>

            <input type="file"
              className="upload-buttons"
              onChange={this.handleFile}
            />

            <h3>image preview</h3>
            {preview}
          </div>

            <button onClick={this.handleSubmit}>Upload photo</button>
        </form>
      </div>
    )
  }

};

export default CreatePhotoForm;