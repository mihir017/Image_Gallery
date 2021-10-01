import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageContext } from "./ImageContext";
import AlbumImages from "./AlbumImages";

const AddImages = () => {
  const { id } = useParams();
  const [imageAlbum, setImageAlbum] = useContext(ImageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const onAddImage = (e) => {
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImageAlbum(
      imageAlbum.map((album) => {
        if (album.id === id) {
          return {
            ...album,
            images: [...album.images, ...fileArray],
          };
        } else {
          return { ...album };
        }
      })
    );
  };

  return (
    <div className="perticular_album">
      <div className="album-form">
        <form style={{ alignItems: "center" }}>
          <h2 style={{ textAlign: "center", margin: ".2rem 0 1rem" }}>
            {imageAlbum.filter((album) => album.id === id)[0].albumName}
          </h2>
          <input
            type="file"
            onChange={onAddImage}
            multiple
            id="addMultipleImages"
            className="file_input"
          />
          <label htmlFor="addMultipleImages" className="imageAlbums">
            <i className="fas fa-camera"></i>Add Images
          </label>
        </form>
      </div>
      <div className="album-grid">
        <AlbumImages
          setImage={setImage}
          setIsOpen={setIsOpen}
          album={imageAlbum.filter((album) => album.id === id)[0]}
        />
      </div>
      {isOpen && (
        <div className={`singleImage`}>
          <i class="fas fa-times" onClick={() => setIsOpen(!isOpen)}></i>
          <img src={image} alt="singleImage" />
        </div>
      )}
    </div>
  );
};

export default AddImages;
