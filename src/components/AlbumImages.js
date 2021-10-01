import React from "react";

const AlbumImages = ({ album, setImage, setIsOpen }) => {
  //   const renderImage = () => {
  //     return album[0].images?.map((image) => {
  //       return <img src={image} alt="album" />;
  //     });
  //   };

  //   return <div>{renderImage()}</div>;
  return (
    <>
      {album?.images?.map((image) => {
        return (
          <div>
            <img
              src={image}
              alt="album"
              onClick={() => {
                setImage(image);
                setIsOpen(true);
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default AlbumImages;
