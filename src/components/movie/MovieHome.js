import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/movie.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as ServiceWeb from "@/service/serviceWeb";

export default function (props) {
  const { title, releaseDate, posterPath, id } = props;
  const imgPath = `${ServiceWeb.tmdbImgDomain}${posterPath}`;
  return (
    <Grid item key={id}  >
      <Grid container className={styles.movieCard}>
        <Grid item  >
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
        <Grid style={{ margin: "5px" }}>
          <Typography fontSize={12} sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography fontSize={10}>{releaseDate}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
