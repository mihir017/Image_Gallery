import React, { useState, useContext } from "react";
import { ImageContext } from "./ImageContext";
import { v4 as uuidv4 } from "uuid";

const createImageObject = (url, name) => {
  return {
    imageURL: url,
    id: uuidv4(),
    albumName: name,
    images: [],
  };
};

const AddAlbum = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [imageAlbum, setImageAlbum] = useContext(ImageContext);

  //   IMage Handler
  const imageChangeHandler = (e) => {
    // console.log(e.target.files);
    const imageObject = URL.createObjectURL(e.target.files[0]);
    setImage(imageObject);
    URL.revokeObjectURL(e.target.files[0]);
  };
  //   onSubmit
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setImageAlbum((prevState) => [
      ...prevState,
      createImageObject(image, name),
    ]);
    setName("");
    setImage("");
  };

  return (
    <div className="album-form">
      <h2>Create New Album</h2>
      <form onSubmit={onHandleSubmit}>
        <p>Enter Album Name</p>
        <input
          type="text"
          className="albumName"
          value={name}
          placeholder="Enter album Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          onChange={imageChangeHandler}
          id="imageAlbum"
          className="file_input"
        />
        <p>Add Image</p>
        <label htmlFor="imageAlbum" className="imageAlbums">
          <i className="fas fa-camera"></i>Add Album Image
        </label>
        <button type="submit">Create Album</button>
      </form>
    </div>
  );
};

export default AddAlbum;
