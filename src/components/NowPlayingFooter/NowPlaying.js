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

  const handleBannerToggle = () => {
    setBannerToggle(!bannerToggle);
  };
  const handleToggle = () => {};
  const handleSeekChange = (event, newValue) => {
    audioElement.current.currentTime = (newValue * duration) / 100;
    setSeekTime(newValue);
  };
  const audioElement = useRef();
  useEffect(() => {
    setCurrTrack(music);
  }, [music]);
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

        <audio ref={audioElement} src={require("../../assets/music/" + musicName).default} preload={"metadata"} />

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
          {/* <Slider style={{color: useStyle.theme}} value={volume} onChange={handleVolumeChange}/> */}
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
