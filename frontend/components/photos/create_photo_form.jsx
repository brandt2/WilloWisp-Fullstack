import React from 'react';

class CreatePhotoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      photoFile: null,
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
    this.setState({ photoFile: e.currentTarget.files[0]});
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
    formData.append('photo[image]', this.state.photoFile)
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
    return (
      <div>
        <form>
          <h2>Upload Photo</h2>
          <br/>
          {this.renderErrors()}
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

            <input type="file"
              onChange={this.handleFile}
            />

            <button onClick={this.handleSubmit}>Upload photo</button>
        </form>
      </div>
    )
  }

};

export default CreatePhotoForm;