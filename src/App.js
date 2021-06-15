import Header from "./components/Layout/Header";
import MusicList from "./components/Music/MusicList";

function App() {
  //const [music, setMusic] = useState([]);
  
  const musicList = [
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
  
  return (
    <div>
      <section>
        <Header/>
      </section>
      <section>
        <MusicList music={musicList} />
      </section>
    </div>
  );
}

export default App;
