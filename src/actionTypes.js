// Actions
const ADD_ALBUM = "ADD_ALBUM";
const ADD_IMAGE = "ADD_IMAGE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Createors
export const addAlbum = album => ({
  type: ADD_ALBUM,
  album
});
export const addImage = image => ({
  type: ADD_IMAGE,
  image
});
export const increment = () => ({
  type: INCREMENT
});
export const decrement = () => ({
  type: DECREMENT
});
