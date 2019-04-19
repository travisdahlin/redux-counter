import React, { Component } from "react";
import { connect } from "react-redux";
import { addImage, addAlbum } from "./actionTypes";

class ImageLoader extends Component {
  addImage = image => {
    this.props.dispatch(addImage(image));
  };
  addAlbum = () => {
    this.props.dispatch(
      addAlbum({
        name: "testAlbum",
        albumId: "test1"
      })
    );
  };
  render() {
    return (
      <div>
        <h3>Images</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  images: state.images,
  albums: state.albums
});

export default connect(mapStateToProps)(ImageLoader);
