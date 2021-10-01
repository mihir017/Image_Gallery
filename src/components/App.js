import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddAlbum from "./AddAlbum";
import "./app.css";
import { ImageProvider } from "./ImageContext";
import AlbumShow from "./AlbumShow";
import AddImages from "./AddImages";

const App = () => {
  return (
    <div className="container">
      <ImageProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <AddAlbum />
              <AlbumShow />
            </Route>
            <Route path="/:id" exact>
              <AddImages />
            </Route>
          </Switch>
        </BrowserRouter>
      </ImageProvider>
    </div>
  );
};

export default App;
