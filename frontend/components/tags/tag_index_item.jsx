import React from 'react';

const TagIndexItem = (props) => {

  if (props.tag.photo_id === props.photoId) {
    return (
      <div>
        <div>
          <h3>{props.tag.tag_name}</h3>
        </div>
      </div>
    )
  } else {
    return null;
  }  
}

export default TagIndexItem;