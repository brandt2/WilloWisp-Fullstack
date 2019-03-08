# Will-o'-Wisp

[Live Demo](https://will-o-wisp.herokuapp.com/#/)

Will-o'-Wisp is a photo sharing website inspired by Flickr. It makes use of Rails/PostgreSQL backend with React.js and Redux on the frontend.

The project was designed and built within a 10-day timeframe. However, I plan to continue to add improvements and new features over time.

## Features

* Secure frontend to backend user authentication using BCrypt.
* Users can see all the photos and albums ever uploaded and created.
* Users can upload photos and edit the text associated with the photos only if they are the owner.
* Users can create albums with photos that they own and make as many albums as they want.
* Users can comment directly on the photo's show page and see their comment appear.
* Users can add tags directly to the photo on the photo's show page.

### Photo Show Page
The photo page displays the picture that was uploaded along with the associated comments and tags. On the same page comments and tags can be directly added to the photo and appear right away.

![Photo Show Page](https://github.com/brandt2/WilloWisp-Fullstack/blob/master/readme/photo_show.gif)

This was accomplished by creating separate components only responsible for handling comments and tags but importing all of them to the photo show page. This also keeps the code DRY while also avoiding rendering the same page multiple times. It also allows for easier debugging as all the parts are in their own folders so locating the bug is easier.

```jsx
render () {
    return (
      <div>
        <div className="photo-show-image-div">
          <div className="back-to-index">
            <button className="back-button" onClick={this.goBack}><i className="fas fa-arrow-left"></i> Back</button>
          </div>
          <div className="photo-image-container">
            <img className="photo-show-image" src={this.props.photo.photoUrl} alt="" />
          </div>
        </div>
        <div className="photo-info">
          <div>
            <div className="photo-info-section">
              <div className="title-edit">
                <h1 className="user">By {this.props.photo.user.username}</h1>
                <div className="edit-button-div">
                  {edit}
                </div>
              </div>
              <h2 className="title">{this.props.photo.title}</h2>
              <h3 className="description">{this.props.photo.description}</h3>
            </div>
            <CommentIndexContainer photoId={this.props.photo.id}/>
          </div>

          <div className="tag-info">
            <TagIndexContainer photoId={this.props.photo.id}/>
          </div>
        </div>

      </div>
    )
  }
```

### Creating Albums
Logged in users can create albums with the pictures they own. On the create album page all the pictures that belong to the user will show up on the right side and the user is allowed to select multiple pictures that they want in the album.

![Create Album Page](https://github.com/brandt2/WilloWisp-Fullstack/blob/master/readme/create_album.gif)

There were challenges that came with allowing the user to select multiple pictures they want to add to an album. One of the challenge that I faced was that my state kept on changing from an array to an integer every time more than one photo was selected. To get through this problem I created a copy of the state and only modified the copy until the user hits the create album button, which will then set the state to the copy. Another major challenge that came with this part was that I had to keep track of when a user clicks on a photo multiple times. To handle this I created a conditional that checked if the array that is going to hold all the photo ids already has the photo id. If the id is already in the array it will remove it, otherwise it will add it to the array.

```jsx
  handleCheck(e){
    let copy = this.state.photosId.slice(0);
    let photoId = Number(e.currentTarget.id);
    if (copy.includes(photoId)){
      copy.splice(copy.indexOf(photoId), 1);
    } else {
      copy.push(photoId);
    }
    this.setState({
      photosId: copy
    });
  }
```

## Project Design

Will-o'-Wisp was designed with the thought of user experience as its primary goal. Considering the 10-day timeframe, the core features of the website was prioritized in order to establish solid features that do not put off users. The code was also arranged into different files and folders in order to keep them manageable. This will allow me to go back into the code in the future and continue to add more features without getting lost.

## Possible Future Features

In the future I would like to implement:
* user's photos and albums
* search bar
