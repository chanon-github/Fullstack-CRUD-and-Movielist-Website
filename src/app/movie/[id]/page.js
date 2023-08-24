import React from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import Image from "next/image";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "@/styles/movie.module.css";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MovieDetail from "@/components/movie/MovieDetail";
export default async function MovieDetailPage({ params }) {
  const { id } = params;
  const url = `${ServiceWeb.movieDetailAPI}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(url);
  const result = await response.json();

  // const imgPath = `${ServiceWeb.tmdbImgDomain}${result.poster_path}`;
  // const backdropImgPath = `${ServiceWeb.tmdbImgDomain}${result.backdrop_path}`;
  // const backgroundImageUrl = `url("${backdropImgPath}")`; // Replace with your image URL
  // const yearRelease = result.release_date.split("-")[0];
  // const containerStyle = {
  //   backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),${backgroundImageUrl}`,
  // };

  // const iconStyle = {
  //   color: "white",
  //   fontSize: "16px",
  // };
  // const iconButtonStyle = {
  //   background: "#14436b",
  //   width: "40px",
  //   height: "40px",
  // };
  return (
    <>
    <MovieDetail result={result}/>
    
    </>
  );
}
