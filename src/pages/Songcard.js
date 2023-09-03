// import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from "react";
import "./Cardcss.css";



const Songcard = (props) => {
  //console.log(props)
   
  return (
    <>
              
          <div   className="song-card">
              <img className="s-card-image" src={props?.item?.thumbnail}/>
              <h1>{props?.item?.name}</h1>
              <h3 className="s-title">{props?.item?.title}</h3>
              </div>
    </>
  );
};

export default Songcard;
