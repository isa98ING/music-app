import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";
import Modal from "./components/UI/Modal/Modal";
import qs from "qs";

function App() {
  const [music, setMusic] = useState([]);
  const [genre, setGenre] = useState("kpop");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Access Token Request
  const accessToken = useCallback(async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: qs.stringify({
        grant_type: "client_credentials",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic MjlkZDU0NzI3ZDAxNGE2YzhhZTA2NWIwNmNiNDdkY2E6MDExNGU5ODYxNjBiNDNlZWJkMTE1NGVmYTFkNjFjOWM=",
      },
    });
    const data = await response.json();
    let authToken = data["access_token"];
    return authToken;
  }, []);

  //UseEffect accessToken renovation
  useEffect(() => {
    setTimeout(() => {
      accessToken();
    }, 3000);
  }, []);

  // Access to the music
  const musicAPI = useCallback(
    async (playlist_id) => {
      let authToken = await accessToken();
      setError(null);

      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=ES&limit=8`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + authToken,
            },
          }
        );
        if (!response.ok) {
          setShowModal(true);
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        const transformedMusic = data.items.map((musicData) => {
          return {
            id: musicData.track.id,
            title: musicData.track.name,
            album: musicData.track.album.name,
            author: musicData.track.artists[0].name,
          };
        });
        setMusic(transformedMusic);
      } catch (error) {
        setError(error.message);
      }
    },
    [accessToken]
  );

  // Kmusic Call
  const kmusic = useCallback(async () => {
    let playlist_id = "3kwb1LyzCSsLLacppOJQc8";
    await musicAPI(playlist_id);
  }, [musicAPI]);

  // JMusic Call
  const jmusic = useCallback(async () => {
    let playlist_id = "5unSNynPOXbga41vLvl8xw";
    await musicAPI(playlist_id);
  }, [musicAPI]);

  // Openings Call
  const opMusic = useCallback(async () => {
    let playlist_id = "1YA5cPIfDy3L03bGnNiDM7";
    await musicAPI(playlist_id);
  }, [musicAPI]);

  // Openings Call
  const vgamesMusic = useCallback(async () => {
    let playlist_id = "37i9dQZF1DXdfOcg1fm0VG";
    await musicAPI(playlist_id);
  }, [musicAPI]);

  // Genre Music Selector
  const genreHandler = (message) => {
    if (message === "kpop") {
      console.log("KPOP IN APP");
      setGenre("kpop");
      kmusic();
    }
    if (message === "jpop") {
      console.log("JPOP IN APP");
      setGenre("jpop");
      jmusic();
    }
    if (message === "openings") {
      console.log("OPENINGS IN APP");
      setGenre("openings");
      opMusic();
    }
    if (message === "videogames") {
      console.log("VIDEOJUEGOS IN APP");
      setGenre("videogames");
      vgamesMusic();
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
