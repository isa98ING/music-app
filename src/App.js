import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";

function App() {
   //DUMMY MUSIC
  const kMusicList = [
    {
      id: "1",
      title: "KPOP",
      album: "album_1",
      author: "author_1",
    },
  ];

  const jMusicList = [
    {
      id: "1",
      title: "JPOP",
      album: "album_1",
      author: "author_1",
    },
  ];
  const opMusicList = [
    {
      id: "1",
      title: "OPENING",
      album: "album_1",
      author: "author_1",
    },
  ];
  const vgamesMusicList = [
    {
      id: "1",
      title: "VIDEOGAMES",
      album: "album_1",
      author: "author_1",
    },
  ];

  const [music, setMusic] = useState(kMusicList);
  const [genre, setGenre] = useState('kpop');
/*
  const kpopMusicList = useCallbaCK(async ()=> {
    const response = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZF1DX9tPFwDMOaN1/tracks?market=ES&limit=8",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json", 
          "access_token": "NgCXRK...MzYjw",
          "token_type": "Bearer",
          "scope": "user-read-private",
          "expires_in": 3600,
          "refresh_token": "NgAagA...Um_SHo"

        },
      }
    );
    const data = await response.json();
    const transformedMusic = data.items.map((musicData) => {
      return {
        id: musicData.track.album.id,
        title: musicData.track.name,
        album: musicData.track.album.name,
        author: musicData.track.artists[0].name
      };
    });
    setMusic(transformedMusic);
  },[])
*/
  const genderHandler = (message) => {
    if (message === "kpop") {
      console.log("KPOP IN APP");
      //kpopMusicList()
      setGenre('kpop');
      setMusic(kMusicList);
    }
    if (message === "jpop") {
      console.log("JPOP IN APP");
      setGenre('jpop');
      setMusic(jMusicList);
    }
    if (message === "openings") {
      console.log("OPENINGS IN APP");
      setGenre('openings');
      setMusic(opMusicList);
    }
    if (message === "videogames") {
      console.log("VIDEOJUEGOS IN APP");
      setGenre('videogames');
      setMusic(vgamesMusicList);
    }
  };

  return (
    <div>
      <section>
        <Header onGender={genderHandler} />
      </section>
      <section>
        <MusicList music={music} genre = {genre} />
      </section>
    </div>
  );
}

export default App;
