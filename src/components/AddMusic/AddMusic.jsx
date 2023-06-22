import React from "react";

const AddMusic = (props) => {
  return (
    <div className="add-music">
      <div className="form-container">
        <h4>Add Music</h4>
        <form>
          <label>Title</label>
          <input type="text"></input><br></br>
          <label>Artist</label>
          <input type="text"></input><br></br>
          <label>Album</label>
          <input type="text"></input><br></br>
          <label>Release Date</label>
          <input type="date"></input><br></br>
          <label>Genre</label>
          <input type="text"></input><br></br>
          <button type="submit">Add to Library</button>
        </form>
      </div>
    </div>
  );
};

export default AddMusic;
