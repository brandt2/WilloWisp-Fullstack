import React from 'react';

const TagIndexItem = (props) => {

  if (props.tag.photo_id === props.photoId) {
    return (
      <div>
        <div className="the-tag">
          <h3 className="tag-name">{props.tag.tag_name}</h3>
        </div>
      </div>
    )
  } else {
    return null;
  }  
}

export default TagIndexItem;