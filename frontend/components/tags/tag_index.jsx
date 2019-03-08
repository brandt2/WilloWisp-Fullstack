import React from 'react';
import TagIndexItem from './tag_index_item';
import CreateTagContainer from './create_tag_container';

class TagIndex extends React.Component {

  componentDidMount(){
    this.props.fetchTags()
  }

  render (){
    let tags = this.props.tags.map( tag => {
      return (
        <TagIndexItem
          key={tag.id}
          tag={tag}
          photoId={this.props.photoId}
        />
      )
    });

    return (
      <div>
        <div>
          <CreateTagContainer photoId={this.props.photoId}/>
        </div>
        
        <div>
          {tags}
        </div>
      </div>
    );
  }
}

export default TagIndex;