import { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import AddMusic from "./components/AddMusic/AddMusic";

function App() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  // const [buttonClick, setButtonClick] = useState("");


  useEffect(() => {
    getAllSongs();
  }, []);



  // useEffect (() => {
  //   let filteredSongs = songs;

  //   if (buttonClick !== "") {
  //     filteredSongs = filteredSongs.filter((song) => song.title.includes(buttonClick))
  //   }

  //   setSongs(filteredSongs);
  // }, [buttonClick]);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <>
      <Header />
      <body className="app-body">
        <AddMusic/>
        <MusicTable songs={songs} search={search} setSearch={setSearch}/>
      </body>
    </>
  );
}

export default App;
