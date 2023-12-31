import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Musicplayer from "../music/Musicplayer";
import "./song.css";
import  Navbar  from "../component/Navbar";
import  Footer  from "../component/Fotter";
import Sidebar from "../pages/Sidebar";

const SongList = () => {
  let params = useParams();
  let songId = params.id;
  //console.log(songid);

  const [songStore, setSongStore] = useState([]);

  async function musicListApi() {
    let temp = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song/${songId}`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );
    let data = await temp.json();

    setSongStore(data);
    //console.log(songStore);
  }
  useEffect(() => {
    musicListApi();
    // console.log(songStore);
  }, []);

  if (songStore.length === 0) {
    return <h1>loading</h1>;
  }

  //<Musicplayer data={songStore?.data?.audio_url}/>

  return (
    <>
     <Navbar/>
    
    <div className="songList-responsive-section">
      <div className="songList-left-side">
          <img className="songList-img" src={songStore?.data?.thumbnail} alt="imageloading" />
         
      </div>
      <div className="songList-right-side">
        <h2>{songStore?.data?.title}</h2>
        <br/>
        <h3>Released On: {songStore?.data?.createdAt}</h3>
        <br/>
         <h3>Mood:{songStore?.data?.mood}</h3>
         <br/>
        {/* Add your music player component here */}
         <div className="songList-music">
        <Musicplayer data={songStore?.data?.audio_url}/>
        </div>
      </div>
    </div>
     <Footer/>
    </>
  );
};

export default SongList;
