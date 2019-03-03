import React from 'react';

// const PhotoIndexItem = props => {
//   return (
//     <div className="photos-index-container">
//       <div className="photos-index-div">
//         <ul className="photos-index">
//           <li><h1>{props.photo.title}</h1></li>
//           {/* <li><h1>{props.photo.description}</h1></li> */}
//           <img className="photo-image" src={props.photo.photoUrl} alt=""/>
//         </ul>
//         <br/>
//       </div>
//     </div>
//   );
// }

const PhotoIndexItem = props => {
  return (
    <div className="photos-index-container">
      <div className="photos-index-div">
        <h1>{props.photo.title}</h1>
        <img className="photo-image" src={props.photo.photoUrl} alt=""/>
      </div>
    </div>
  );
}

export default PhotoIndexItem;