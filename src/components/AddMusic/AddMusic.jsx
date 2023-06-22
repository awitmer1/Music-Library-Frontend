import React, { useState } from 'react';
import axios from "axios";

const AddMusic = ({setAddMusicBtn}) => {

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(inputs);

    axios.post('http://127.0.0.1:8000/api/music/',inputs).then((response) => {
    console.log(response.status, response.data.token);});

    setInputs([""]);

    setAddMusicBtn("click");
  }


  return (
    <div className="add-music">
      <div className="form-container">
        <h4>Add Music</h4>
        <form>
          <label>Title</label>
          <input type="text" name='title' value={inputs.title || ""} onChange={handleChange}></input>
          <br></br>
          <label>Artist</label>
          <input type="text" name='artist' value={inputs.artist || ""} onChange={handleChange}></input>
          <br></br>
          <label>Album</label>
          <input type="text" name='album' value={inputs.album || ""} onChange={handleChange}></input>
          <br></br>
          <label>Release Date</label>
          <input type="date" name='release_date' value={inputs.release_date || ""} onChange={handleChange}></input>
          <br></br>
          <label>Genre</label>
          <input type="text" name='genre' value={inputs.genre || ""} onChange={handleChange}></input>
          <br></br>
        </form>
        <button type="submit" className="add-music-button" onClick={handleSubmit}>
          Add to Library
        </button>
      </div>
    </div>
  );
};

export default AddMusic;
