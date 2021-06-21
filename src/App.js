import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";
import qs from "qs";

function App() {
  
  const [music, setMusic] = useState([]);
  const [genre, setGenre] = useState("kpop");

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
    accessToken();
  }, [accessToken]);
  
  // Access to the music
  const musicAPI =  useCallback(async(playlist_id) => {
    let authToken = await accessToken();
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
  },[accessToken]);

  // Kmusic Call
  const kmusic = useCallback(async() =>{
    let playlist_id = '3kwb1LyzCSsLLacppOJQc8'
    await musicAPI(playlist_id);
  },[]);

  // JMusic Call
  const jmusic = useCallback(async() =>{
    let playlist_id = '5unSNynPOXbga41vLvl8xw'
    await musicAPI(playlist_id);
  },[]);

  // Openings Call
  const opMusic = useCallback(async() =>{
    let playlist_id = '1YA5cPIfDy3L03bGnNiDM7'
    await musicAPI(playlist_id);
  },[]);

  // Openings Call
  const vgamesMusic = useCallback(async() =>{
    let playlist_id = '37i9dQZF1DXdfOcg1fm0VG'
    await musicAPI(playlist_id);
  },[]);

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

  return (
    <div>
      <section>
        <Header onGenre={genreHandler} />
      </section>
      <section>
        <MusicList music={music} genre={genre} />
      </section>
    </div>
  );
}

export default App;
