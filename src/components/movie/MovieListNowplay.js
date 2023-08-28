import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/movie.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as ServiceWeb from "@/service/serviceWeb";

export default function MovieListNowplay(props) {
  const { title, releaseDate, posterPath, id, overview } = props;
  const imgPath = `${ServiceWeb.tmdbImgDomain}${posterPath}`;
  return (
    <>
    <Grid item key={id} className={styles.movieCardContainer}>
      <Grid
        container
        className={styles.movieCard}
        justifyContent={"space-between"}
      >
        <Grid item xs={3} sm={2} md={12} xl={12}>
          <Link href={`/movie/${id}`}>
            <Image
              width={200}
              height={300}
              alt={title}
              src={imgPath}
              className={styles.movieImg}
            />
          </Link>
        </Grid>
        <Grid item style={{ marginLeft: "5px" }} xs={6} md={12} alignSelf={'center'}>
          <Typography
            fontSize={12}
            sx={{
              fontWeight: "bold",
              "@media (max-width: 900px)": {
                fontSize: "18px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            fontSize={12}
            color={"#b0afaf"}
            sx={{ fontStyle: "oblique" }}
          >
            {releaseDate}
          </Typography>
          <Typography
            fontSize={12}
            className={styles.overviewDiv}
      
          >
            {overview}
          </Typography>
        </Grid>
        <Grid item xs={1} md={1} xl={1}>
          <div
          className={styles.movieBoxGradient}
       
          ></div>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
