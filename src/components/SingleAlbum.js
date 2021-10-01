import React from "react";
import { Link } from "react-router-dom";

const SingleAlbum = ({ albumImage }) => {
  return (
    <div>
      <img src={albumImage.imageURL} alt="album" />
      <div>
        <p className="albumTitle">{albumImage.albumName.slice(0, 10)}</p>
        <Link to={`/${albumImage.id}`} className="addImages">
          Open
        </Link>
      </div>
    </div>
  );
};

export default SingleAlbum;
