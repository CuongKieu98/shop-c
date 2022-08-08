import React,{useContext} from 'react';
import "./SideBar.scss";
import SideBarOption
 from '../SideBarOptions/SideBarOption';
 import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined} from "@mui/icons-material";


function SideBar() {
    //const useStyle = useContext(ThemeContext);
  return (
    <aside  className={"aside-bar"}>
    <div className="aside-bar-container">
        <p className={"p1"}>
            <span>LIBRARY</span>
        </p>
        <SideBarOption className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
        <SideBarOption className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"About"}/>
        <SideBarOption className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
        {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
        <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
    </div>
    <div className="aside-bar-container playlist">
        <p className={"p1"}>
            <span>MY PLAYLIST</span>
        </p>
        <SideBarOption className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"}  title={"Instrumental"}/>
        <SideBarOption className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}  title={"Electronic"}/>
    </div>
</aside>
  )
}

export default SideBar