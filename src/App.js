import './App.css';
import Header from './components/Header/Header';
import MusicTable from './components/MusicTable/MusicTable';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
    <Header />
    <body className='app-body'>
      <SearchBar />
      <MusicTable />
    </body>
    </>
  );
}

export default App;
