import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";
import Modal from "./components/UI/Modal/Modal";
import { api_Music, authorization } from "./api-calls";

function App() {
  const [music, setMusic] = useState([]);
  const [genre, setGenre] = useState("kpop");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  //  Api music call
  let music_call = async (playlist_id) => {
    let token = await authorization();
    try {
      let transformed_music = await api_Music(token, playlist_id);
      setMusic(transformed_music);
    } catch (error) {
      setShowModal(true);
      setError(error.message);
    }
  };

  // Kmusic Call
  const kmusic = async () => {
    setError(null);
    let playlist_id = `${process.env.REACT_APP_API_PLAYLIST_ID_KPOP}`;
    await music_call(playlist_id);
  };

  // JMusic Call
  const jmusic = async () => {
    let playlist_id = `${process.env.REACT_APP_API_PLAYLIST_ID_JPOP}`;
    await music_call(playlist_id);
  };

  // Openings Call
  const opMusic = async () => {
    let playlist_id = `${process.env.REACT_APP_API_PLAYLIST_ID_OPENING}`;
    await music_call(playlist_id);
  };

  // Videogames Call
  const vgamesMusic = async () => {
    let playlist_id = `${process.env.REACT_APP_API_PLAYLIST_ID_VIDEOGAMES}`;
    await music_call(playlist_id);
  };

  // Genre Music Selector
  const genreHandler = async (message) => {
    if (message === "kpop") {
      setGenre("kpop");
      await kmusic();
    }
    if (message === "jpop") {
      setGenre("jpop");
      await jmusic();
    }
    if (message === "openings") {
      setGenre("openings");
      await opMusic();
    }
    if (message === "videogames") {
      setGenre("videogames");
      await vgamesMusic();
    }
  };

  //Modal Handler
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <section>
        <Header onGenre={genreHandler} />
      </section>
      <section>
        {!error && <MusicList music={music} genre={genre} />}
        {showModal && <Modal onClose={hideModalHandler}>{error}</Modal>}
      </section>
    </div>
  );
}

export default App;
