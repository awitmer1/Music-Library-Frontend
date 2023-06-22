import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const MusicTable = ({songs, search, setSearch}) => {

  // const [editBtn, setEditBtn] = useState('');
  // const [deleteBtn, setDeleteBtn] = useState('');

  const editBntHandle = (event) => {

    alert('Functionality coming soon!');

  }
  const deleteBntHandle = (event) => {

    alert('Functionality coming soon!');

  }

  return (
    <div className="table-container">
      <SearchBar songs={songs} search={search} setSearch={setSearch}/>
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
                <td>{songs.title}</td>
                <td>{songs.artist}</td>
                <td>{songs.album}</td>
                <td>{songs.release_date}</td>
                <td>{songs.genre}</td>
                <button className="edit-delete" onClick={editBntHandle}>Edit</button>
                <button className="edit-delete" onClick={deleteBntHandle}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;