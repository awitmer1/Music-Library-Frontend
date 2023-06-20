import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';  
// // import Table from 'react-bootstrap/Table'
// import {Table} from 'react-bootstrap';  

const MusicTable = ({songs}) => {
  return (
    <div className="table-container">
      <h3>Music Table</h3>
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
