import React, { useContext } from "react";
import { ImageContext } from "./ImageContext";
import SingleAlbum from "./SingleAlbum";

const AlbumShow = () => {
  const [imageAlbum] = useContext(ImageContext);

  console.log(imageAlbum);
  return (
    <div className="show-album">
      <h3 className="album-list">Album List</h3>
      <div className="album-grid">
        {imageAlbum?.map((image) => {
          return <SingleAlbum albumImage={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};

export default AlbumShow;
