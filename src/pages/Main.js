import React from 'react';
import { useEffect, useContext} from 'react';
import { useState } from 'react';
import Songcard from './Songcard';
import "./Cardcss.css"
import UserContext from '../component/UserContext';
import Podcast from './Podcast';

import { useNavigate} from "react-router-dom";



let filtersong = (userSearchText,mydata) => {
  if (!mydata) {
      return [];
  }

  let searchtext = userSearchText.toLowerCase();
  return mydata.filter((song) => {
      let newsong=song?.title.toLowerCase();

      return newsong.includes(searchtext);
  });
}


const Main= () => {
  const navigate=useNavigate();
  const[filterData,setFilterData]=useState([])


  const { userSearchText } = useContext(UserContext);
   console.log(userSearchText)

     const[mydata,setMyData]=useState([]);
     let [page, setPage] = useState(1); //for infinite scroll



     useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

     let handleScroll = () => {
      // console.log("heghti",document.documentElement.scrollHeight);
      // console.log("pixel",document.documentElement.scrollTop);
      // console.log("window height",window.innerHeight);
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((page) => page + 1);
      }
    };

    async function musicListApi() {
        let temp = await fetch(
          `https://academics.newtonschool.co/api/v1/music/song?page=${page}&limit=20`,
          {
            headers: {
              projectId: "f104bi07c490",
            },
          }
        );
        let data = await temp.json();
        setMyData(data?.data)
        setFilterData(data?.data)
        // console.log(data?.data);
      }
      useEffect(() => {
        musicListApi();
        // console.log(musicList);
      }, [page]);

      useEffect(()=>{
        musicListApi();
      },[])
    

     useEffect(()=>{
      let data = filtersong(userSearchText, mydata);
      setFilterData(data);
     },[userSearchText])


  if(filterData.length===0){
    return <h1>loading</h1>
  }
 

  
  
  
  return (

      <>
        <div className='api-card'>
          {
            filterData.map((data)=>{
                return (
                  <div onClick={()=>{navigate(`/songList/${data?._id}`)}}>
                  <Songcard item={data}/>
                 
                  </div>
                )                
            })
          }
        </div>
      </> 
  );
};



export default Main;
