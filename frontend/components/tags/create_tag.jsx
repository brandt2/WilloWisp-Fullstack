import React from 'react';

class CreateTag extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tagName: '',
      photoId: this.props.photoId
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
    const formData = new FormData();
    formData.append('tag[tag_name]', this.state.tagName);
    formData.append('tag[photo_id]', this.state.photoId);
    this.props.createTag(formData)
      .then( () => {
        this.setState({
          tagName: ''
        })
      })
  }

  renderErrors() {
    return (
      <ul className='login-errors'>
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
      <div>
        <div>
          {this.renderErrors}
          <input
            type="text" 
            value={this.state.tagName} 
            onChange={this.handleInput("tagName")}
            placeholder="Add a tag"/>
        </div>

        <div>
          <button className="tag-button" onClick={this.handleSubmit}>Add tag</button>
        </div>
      </div>
    )
  }

}

export default CreateTag;