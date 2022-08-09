import { React, useState, useEffect } from "react";
import { Autocomplete, TextField, Skeleton } from "@mui/material";
import "./Home.scss";
import Navigation from "~/components/Navigation/Navigation";
import SideBar from "~/components/SideBar/SideBar";
import NowPlaying from "~/components/NowPlayingFooter/NowPlaying";
import NavigationBottom from "~/components/NavigationBottom/NavigationBottom";
//redux
import { useSelector } from "react-redux";
import NavigationMobile from "~/components/Navigation/NavigationMobile";

function Home() {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currMusic, setCurrMusic] = useState(null);
  const { playing, bannerOpen } = useSelector((state) => state.musicReducer);
  //resize
  window.addEventListener("resize", handleResize);

  function handleResize() {
    setScreenSize(window.innerWidth);
  }
  useEffect(() => {
    setCurrMusic(playing);
  }, [playing]);
  const musictest = {
    id: 0,
    name: "Illusion",
    author_name: "aspa",
    img: "shak",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "Illusion.mp3",
    attribution: {
      song: "Clarx - Shakedown [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/Shakedown",
      stream: "http://youtu.be/qJT0mc3q6Lg",
    },
  };
  useEffect(() => {
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });
  //seleken
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className={"home-container"}>
      {!loaded ? (
        <div className="Home-skeleton">
          <Skeleton animation={"wave"} variant={"rect"} height={"100vh"} />
        </div>
      ) : (
        <>
          {screenSize <= 970 ? <NavigationMobile /> : <Navigation />}
          <section className={"home-music-container"}>
            <div className="sidebar-home">
              <SideBar />
            </div>
            {/* <div className="main-home">{Page}</div> */}
          </section>
          {
            musictest ? <NowPlaying music={musictest} /> : <></>
          }
         
          {/* {bannerOpen && (
            <section className="current-large-banner">
              <CurrentPlayingLarge />
            </section>
          )} */}
          {/* <React.Fragment>
            {currMusic ? (
              <FooterMusicPlayer music={currMusic} />
            ) : (
              <FooterSelectMusic />
            )}
            {screenSize <= 970 && <BottomNavigationMobile />}
          </React.Fragment> */}
          {screenSize <= 970 && <NavigationBottom />}
        </>
      )}
    </div>
  );
}

export default Home;
