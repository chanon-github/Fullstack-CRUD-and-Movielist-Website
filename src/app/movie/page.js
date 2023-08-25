// import React from "react";
import MovieHome from "@/components/movie/MovieHome";
import styles from "@/styles/movie.module.css";
import Grid from '@mui/material/Grid';
import * as ServiceWeb from '@/service/serviceWeb' 
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Movie() {

  const token = cookies().get('token')?.value
  const response = await ServiceWeb.getMovie(token)
  if(response?.isInvalidToken){
    redirect('/user/login');
  }
  const data  = await response.results

  return (
    // <></>
<>
    <Grid container item xs={12} spacing={3} justifyContent={'center'} className={styles.movieListContainer}    >
        {data?.map((movie) => {
      
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
    </>
  );
}
