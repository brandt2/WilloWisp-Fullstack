import React from 'react';
import TagIndexItem from './tag_index_item';
import CreateTagContainer from './create_tag_container';

class TagIndex extends React.Component {

  componentDidMount(){
    this.props.fetchTags()
  }

  render (){
    const tags = this.props.tags.map( tag => {
      return (
        <TagIndexItem
          key={tag.id}
          tag={tag}
          photoId={this.props.photoId}
        />
      )
    });

    const addTag = this.props.photo.owner_id == this.props.currentUserId ? (
      <CreateTagContainer photoId={this.props.photoId} />
    ) : <p className="add-comment">Only photo's owner can add tags</p>;

    return (
      <div className="tag-section">
        <h1 className="tag-title">Tags</h1>
        <div className="all-the-tags">
          {tags}
        </div>
        <div className="add-tag-section">
          {/* <CreateTagContainer photoId={this.props.photoId}/> */}
          {addTag}
        </div>

      </div>
    );
  }
}

export default TagIndex;