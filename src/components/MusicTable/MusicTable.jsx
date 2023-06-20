import React from "react";

const MusicTable = (props) => {
  return (
    <div className="table-container">
      <h3>MusicTable</h3>
      <table className="table">
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
          {props.songs.map((entry, index) => {
            return (
              <tr key={index}>
                <td>{props.songs.title}</td>
                <td>{props.songs.artist}</td>
                <td>{props.songs.album}</td>
                <td>{props.songs.release_date}</td>
                <td>{props.songs.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
