import React from "react";
import SearchBar from "../SearchBar/SearchBar";
// import 'bootstrap/dist/css/bootstrap.min.css';  
// // import Table from 'react-bootstrap/Table'
// import {Table} from 'react-bootstrap';  

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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;