import React from "react";
import MovieHome from "@/components/movie/MovieHome";
import styles from "@/styles/movie.module.css";
import Grid from '@mui/material/Grid';
import * as ServiceWeb from '@/service/serviceWeb' 
export default async function Movie() {
  const url = `${ServiceWeb.nowPlayingListAPI}`;

  const response = await fetch(url);
  const result = await response.json();
  const data = result?.results;

  

  return (
    // className={styles.layoutContainer}
    <Grid container item xs={12} spacing={3} justifyContent={'center'} className={styles.movieListContainer}    >
        {data.map((movie) => {
          const date = new Date(movie.release_date)
          const resultDate = date.toLocaleDateString('en-EN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
           
            })
          return (
            <MovieHome
              id={movie.id}
              title={movie.title}
              releaseDate={resultDate}
              posterPath={movie.poster_path}
              overview={movie.overview}
            />
          );
        })}
    </Grid>
      // <div className={styles.movieContainer}>
      //   {data.map((movie) => {
      //     return (
      //       <MovieHome
      //         title={movie.title}
      //         releaseDate={movie.release_date}
      //         posterPath={movie.poster_path}
      //       />
      //     );
      //   })}
      // </div>
  );
}
