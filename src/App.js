import React from "react";
import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";

function App() {
  
  let musicList = [];
  //DUMMY MUSIC
  const kMusicList = [
    {
      id: "1",
      title: "unravel",
      album: "album_1",
      author: "author_1",
    },
    {
      id: "2",
      title: "title_2",
      album: "album_2",
      author: "author_2",
    },
  ];
  const jMusicList = [
    {
      id: "1",
      title: "JPOP",
      album: "album_1",
      author: "author_1",
    },
    {
      id: "2",
      title: "JPOP",
      album: "album_2",
      author: "author_2",
    },
  ];

  const genderHandler = (gender) =>{
    console.log(gender)
  }

  return (
    <div>
      <section>
        <Header onGender ={genderHandler}/>
      </section>
      <section>
       <MusicList music={musicList} />
      </section>
      
    </div>
  );
}

export default App;
