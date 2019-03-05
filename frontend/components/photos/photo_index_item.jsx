import React from 'react';
import { Link } from 'react-router-dom';

// class PhotoIndexItem extends React.Component {
  
//   componentDidMount(){
//     this.props.fetchAllUsers()
//   }

//   render(){
//     const user = this.props.users[this.props.photo.owner_id];
//     console.log(this.props.photo)
//     if (user === undefined) return null;
//     return (
//       <div className="photos-index-div">
//         <h1 className="photo-index-title">{this.props.photo.title}</h1>
//         <h3 className="photo-index-username">By {user.username}</h3>
//         <Link to={`/photos/${this.props.photo.id}`}><img className="photo-image" src={this.props.photo.photoUrl} alt="" /></Link>
//       </div>
//     )
//   }

// }

const PhotoIndexItem = props => {

  // const user = props.users[props.photo.owner_id];
  // if (user === undefined) return null;

  return (
    <div className="photos-index-div">
      <h1 className="photo-index-title">{props.photo.title}</h1>
      {/* <h3 className="photo-index-username">By {user.username}</h3> */}
      <Link to={`/photos/${props.photo.id}`}><img className="photo-image" src={props.photo.photoUrl} alt="" /></Link>
    </div>
  );
}

export default PhotoIndexItem;