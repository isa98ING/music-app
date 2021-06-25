import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";
import Modal from "./components/UI/Modal/Modal";
import { api_Music, authorization } from "./api-calls";

function App() {
  const [music, setMusic] = useState([]);
  const [genre, setGenre] = useState("kpop");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  //UseEffect accessToken renovation
  useEffect(() => {
    setTimeout(() => {
      authorization();
    }, 1200);
  }, []);

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
    let playlist_id = "3kwb1LyzCSsLLacppOJQc8";
    await music_call(playlist_id);
  };

  // JMusic Call
  const jmusic = async () => {
    let playlist_id = "5unSNynPOXbga41vLvl8xw";
    await music_call(playlist_id);
  };

  // Openings Call
  const opMusic = async () => {
    let playlist_id = "1YA5cPIfDy3L03bGnNiDM7";
    await music_call(playlist_id);
  };

  // Openings Call
  const vgamesMusic = async () => {
    let playlist_id = "37i9dQZF1DXdfOcg1fm0VG";
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
