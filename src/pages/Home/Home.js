import { React, useState, useEffect } from "react";
import { Autocomplete, TextField, Skeleton } from "@mui/material";
import "./Home.scss";
import Navigation from "~/components/Navigation/Navigation";
import SideBar from "~/components/SideBar/SideBar";
import NowPlaying from "~/components/NowPlayingFooter/NowPlaying";
import NavigationBottom from "~/components/NavigationBottom/NavigationBottom";
//redux
import { useSelector } from "react-redux";

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
    id: 1,
    name: "dasdad",
    author_name: "dasda",
    img: "dasd",
    musicName: "Illusion.mp3",
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
          {/* {screenSize <= 970 ? <MobileTopNavigation /> : <Navigation />} */}
          <Navigation />
          <section className={"home-music-container"}>
            <div className="sidebar-home">
              {/* <SideBar /> */}
              <SideBar />
            </div>
            {/* <div className="main-home">{Page}</div> */}
          </section>
          <NowPlaying music={currMusic} />
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
