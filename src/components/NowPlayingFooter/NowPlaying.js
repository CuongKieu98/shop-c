import { Button, Avatar, Slider } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import ControlsButton from "../ControlsButton/ControlsButton";
import Name from "../NameSong/Name";
import "./NowPlaying.scss";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import stringUtils from "~/utils/stringUtils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaying, setBannerOpen } from "~/actions/actions";
import musics from "~/assets/music";

function NowPlaying({ music }) {
  const [{ id, name, author_name, img, musicName }, setCurrTrack] =
    useState(music);
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [bannerToggle, setBannerToggle] = useState(false);

  const audioElement = useRef();
  const dispatch = useDispatch();

  const { playlists } = useSelector((state) => state.musicReducer);
  const handleToggle = (type, val) => {
    switch (type) {
      case "repeat":
        setRepeatClick(val);
        break;
      case "prev":
        setPrevClicked(val);
        break;
      case "play-pause":
        setPlayPauseClicked(val);
        break;
      case "next":
        setNextClicked(val);
        break;
      case "volume":
        setVolumeClicked(val);
        break;
      default:
        break;
    }
  };
  const handleBannerToggle = () => {
    setBannerToggle(!bannerToggle);
  };
  const handleSeekChange = (event, newValue) => {
    audioElement.current.currentTime = (newValue * duration) / 100;
    setSeekTime(newValue);
  };
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  useEffect(() => {
    dispatch(setBannerOpen(bannerToggle));
  }, [dispatch, bannerToggle]);

  useEffect(() => {
    isPlaying
      ? audioElement.current
          .play()
          .then(() => {})
          .catch((e) => {
            audioElement.current.pause();
            audioElement.current.currentTime = 0;
          })
      : audioElement.current.pause();
    audioElement.current.loop = isRepeatClicked;
    audioElement.current.volume = volume / 100;
    audioElement.current.muted = isVolumeClicked;
    audioElement.current.onloadeddata = () => {
      if (audioElement.current != null)
        setDuration(audioElement.current.duration);
    };
    setInterval(() => {
      if (audioElement.current !== null)
      setCurrTime(audioElement.current.currentTime);
    }, 500);


  },[isPlaying, isRepeatClicked, isVolumeClicked, volume]);

  useEffect(() => {
    setCurrTrack(music);
  }, [music]);

  useEffect(() => {
    if (currTime === 0 && duration === 0) {
      setSeekTime(0);
    } else {
      setSeekTime(currTime / (duration / 100));
    }
  }, [currTime, duration]);

  useEffect(() => {
    audioElement.current.onended = () => {
      setNextClicked(true);
    };
  });

  useEffect(() => {
    if (isNextClicked) {
      let currTrackId = (id + 1) % playlists.length;
      dispatch(setCurrentPlaying(playlists[currTrackId]));
      setNextClicked(false);
    }
    if (isPrevClicked) {
      let currTrackId = (id - 1) % playlists.length;
      if (id - 1 < 0) {
        currTrackId = playlists.length - 1;
      }
      dispatch(setCurrentPlaying(playlists[currTrackId]));
      setPrevClicked(false);
    }
  }, [dispatch, id, isNextClicked, isPrevClicked, playlists]);

  return (
    <div className="footer-player">
      <div className="playback">
        <Slider
          className={"playback-completed"}
          value={seekTime}
          onChange={handleSeekChange}
        />
      </div>
      <Button
        startIcon={<Avatar variant="square" src={""} alt={name} />}
        onClick={handleBannerToggle}
        className="curr-music-container"
      >
        <div className="curr-music-details">
          <Name name={name} className={"song-name"} length={name.length} />
          <Name
            name={author_name}
            className={"author-name"}
            length={author_name.length}
          />
        </div>
      </Button>
      <div className="playback-controls">
        <ControlsButton
          type={"repeat"}
          defaultIcon={<RepeatIcon fontSize={"large"} />}
          changeIcon={<RepeatOneIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsButton
          type={"prev"}
          defaultIcon={<SkipPreviousIcon fontSize={"large"} />}
          changeIcon={<SkipPreviousIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <audio ref={audioElement} src={musics.illusion} preload={"metadata"} />

        <ControlsButton
          type={"play-pause"}
          defaultIcon={<PlayArrowIcon fontSize={"large"} />}
          changeIcon={<PauseCircleOutlineIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsButton
          type={"next"}
          defaultIcon={<SkipNextIcon fontSize={"large"} />}
          changeIcon={<SkipNextIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />
      </div>
      <div className="playback-widgets">
        <div className="timer">
          <p>
            <span>{stringUtils.formatTime(currTime)}</span>/
            <span>{stringUtils.formatTime(duration)}</span>
          </p>
        </div>
        <div className={"slider"}>
          <Slider value={volume} onChange={handleVolumeChange} />
        </div>
        <ControlsButton
          type={"volume"}
          defaultIcon={<VolumeUpIcon />}
          changeIcon={<VolumeOffIcon />}
          onClicked={handleToggle}
        />
      </div>
    </div>
  );
}

export default NowPlaying;
