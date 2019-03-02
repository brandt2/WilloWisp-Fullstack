import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId);
  }

  componentDidUpdate(prevProps){
    if(this.props.photoId !== prevProps.photoId){
      this.props.fetchPhoto(this.props.photoId)
    }
  }

  // componentWillReceiveProps(newProps){
  //   newProps.fetchPhoto(newProps.match.params.photoId)
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("should update")
  //   if (nextProps.match.params.photoId !== this.props.match.params.photoId){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // componentWillUpdate(nextProps){
  //   let photoId = nextProps.match.params.photoId
  //   nextProps.fetchPhoto(photoId)
  // }

  render () {
    if (this.props.photo === undefined) return null;
    return (
      <div>
        <h1>{this.props.photo.title}</h1>
        <h1>{this.props.photo.description}</h1>
        <img src={this.props.photo.photoUrl} alt="" />
        <Link to="/photos">go back to the index</Link>
      </div>
    )
  }

}

export default PhotoShow;