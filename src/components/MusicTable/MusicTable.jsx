import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

const MusicTable = ({
  songs,
  search,
  setSearch,
  setDelMusicBtn,
  setResetSearch,
}) => {
  // const [editBtn, setEditBtn] = useState('');
  // const [deleteBtn, setDeleteBtn] = useState('');

  const deleteData = async (id) => {
    console.log(songs.id);
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/music/${id}/`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Make event handlers functions (not const's), pass in w/ anonymous function calls
  function deleteBtnHandle(id) {
    console.log(`Deleting song with id # ${id}...`);
    deleteData(id);
    setDelMusicBtn("click");
  }

  function editBntHandle(id) {
    alert("Functionality coming soon!");
  }

  return (
    <div className="table-container">
      <SearchBar
        songs={songs}
        search={search}
        setSearch={setSearch}
        setResetSearch={setResetSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((songs) => {
            return (
              <tr key={songs.id}>
                <td>{songs.id}</td>
                <td>{songs.title}</td>
                <td>{songs.artist}</td>
                <td>{songs.album}</td>
                <td>{songs.release_date}</td>
                <td>{songs.genre}</td>
                <button
                  className="edit-delete"
                  onClick={() => editBntHandle(songs.id)}
                >
                  Edit
                </button>
                <button
                  className="edit-delete"
                  onClick={() => deleteBtnHandle(songs.id)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
