import React, { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageAlbum, setImageAlbum] = useState([]);

  return (
    <ImageContext.Provider value={[imageAlbum, setImageAlbum]}>
      {children}
    </ImageContext.Provider>
  );
};
