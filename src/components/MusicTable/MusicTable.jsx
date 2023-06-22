import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const MusicTable = ({songs, search, setSearch}) => {
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
                <button className="edit-delete">Edit</button>
                <button className="edit-delete">Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;