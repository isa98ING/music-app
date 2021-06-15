import classes from './MusicList.module.css';
import Music from './Music';

const MusicList = (props)=>{

    return (
        <ul className={classes['music-list']}>
          {props.music.map((music) => (
            <Music
              key={music.id}
              title={music.title}
              album={music.album}
              author={music.author}
            />
          ))}
        </ul>
      );
}

export default MusicList;