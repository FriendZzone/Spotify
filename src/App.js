
import { useState } from 'react';
import './App.css';
import DetailSong from './Components/DetailSong';
import ListSongs from './Components/ListSongs';
import Navbar from './Components/Navbar'
import Playing from './Components/Playing';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const currentSong = DataSongs.find(song => song.id === idSong )
    if (!currentSong){
      setSong(DataSongs[0])
    }
    else{

      setSong(currentSong)
    }
  }
  console.log('useState')

  return (
    <div className="App">
      { console.log('re-render App')}
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar/>
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong/>
          {/* span 2 */}
          <ListSongs/>
        </div>
          <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
