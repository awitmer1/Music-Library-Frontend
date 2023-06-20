import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header/Header';
import MusicTable from './components/MusicTable/MusicTable';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';

function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect (() => {
    getAllSongs();    
  }, []);
  
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }
  
  
  return (
    <>
    <Header />
    <body className='app-body'>
      <SearchBar songs={songs}/>
      <MusicTable songs={songs}/>
    </body>
    </>
  );
}

export default App;
