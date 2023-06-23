import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import AddMusic from "./components/AddMusic/AddMusic";

// TODO Make popup for song edit (put requests)
// TODO Add Y/N Prompt to confirm song delete
// TODO Search by date

function App() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [resetSearch, setResetSearch] = useState("");
  const [addMusicBtn, setAddMusicBtn] = useState("");
  const [delMusicBtn, setDelMusicBtn] = useState("");

  useEffect(() => {
    getAllSongs();
    setAddMusicBtn("");
  }, [addMusicBtn]);

  useEffect(() => {
    getAllSongs();
    setDelMusicBtn("");
  }, [delMusicBtn]);

  useEffect(() => {
    getAllSongs();
    setResetSearch("");
  }, [resetSearch]);

  useEffect(() => {
    let songFilter = songs.filter((song) => {
      if (search === "") {
        return song;
      } else if (
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase()) ||
        song.album.toLowerCase().includes(search.toLowerCase()) ||
        song.genre.toLowerCase().includes(search.toLowerCase())
      ) {
        return song;
      }
    });

    setSongs(songFilter);
  }, [search]);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <>
      <Header />
      <body className="app-body">
        <AddMusic setAddMusicBtn={setAddMusicBtn} />
        <MusicTable
          songs={songs}
          search={search}
          setSearch={setSearch}
          setResetSearch={setResetSearch}
          setDelMusicBtn={setDelMusicBtn}
        />
      </body>
    </>
  );
}

export default App;
