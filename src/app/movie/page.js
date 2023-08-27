"use client";
import MovieHome from "@/components/movie/MovieHome";
import styles from "@/styles/movie.module.css";
import Grid from "@mui/material/Grid";
import * as ServiceWeb from "@/service/serviceWeb";
import {  useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Movie() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async (page) => {
    setIsLoading(true);
    const response = await ServiceWeb.getMovie(page);
    if (response?.isInvalidToken) {
      router.push('/user/login');
      setData([]);
      setIsLoading(false);

     
    } else {
      setData([...data, ...response.results]);
      setIsLoading(false);

    }
    // dispatch(closeProgress());
  };

  const onClickLoadmore = () => {
    const page = currentPage + 1;
    setCurrentPage(page);
    dataFetch(page);


  };

  return (
    // <></>
    <>
      <Grid
        container
        justifyContent={"center"}
        className={styles.movieListContainer}
      >
        {/* <Grid item container xs={12} sm={12} xl={12}  style={{display: isLoading ? 'block' : 'none'}}>
          <Box  sx={{ width: "100%", marginTop: "70px" ,position:'fixed' }}>
            <LinearProgress />
          </Box>
        </Grid> */}

        <Grid item container xs={12} sm={12} xl={7} spacing={3}  >
          {data?.map((movie) => {
            const date = new Date(movie.release_date);
            const resultDate = date.toLocaleDateString("en-EN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
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
        {/* <Grid item container justifyContent={"center"} xs={12} sm={12} xl={7}>
          <Button
            variant="contained"
            fullWidth
            style={{
              marginTop: "10px",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
            onClick={onClickLoadmore}
          >
            {"Load More..."}
          </Button>
        </Grid> */}
      </Grid>
    </>
  );
}
