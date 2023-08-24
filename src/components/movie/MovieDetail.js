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

export default function MovieDetail(props) {
  const { result } = props;
  const imgPath = `${ServiceWeb.tmdbImgDomain}${result?.poster_path}`;
  const backdropImgPath = `${ServiceWeb.tmdbImgDomain}${result?.backdrop_path}`;
  const backgroundImageUrl = `url("${backdropImgPath}")`; // Replace with your image URL
  const yearRelease = result?.release_date.split("-")[0];
  const containerStyle = {
    backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),${backgroundImageUrl}`,
  };

  const iconStyle = {
    color: "white",
    fontSize: "16px",
  };
  const iconButtonStyle = {
    background: "#14436b",
    width: "40px",
    height: "40px",
  };
  return (
    <Grid
      justifyContent={"center"}
      container
      style={containerStyle}
      className={styles.movieDetailContainer}
      // spacing={2}
    >
      <Grid item xs={12} sm={12} md={6} xl={4}>
        <Image
          width={350}
          height={500}
          alt=""
          src={imgPath}
          className={styles.imgDiv}
        ></Image>
      </Grid>

      <Grid container item xs={12} sm={12} md={6} xl={8} style={{padding:'20px'}}>
        {/* MovieDetailBox */}
        <Grid
          container
          direction={"column"}
          justifyContent={"space-evenly"}
          // alignItems="center"
        >
          <Grid item>
            <Typography
              fontSize={"2.2rem"}
              color={"white"}
              sx={{ fontWeight: "bold" }}
            >
              {result?.original_title + " "}
              <label style={{ color: "#b9b3b3" }}>{`(${yearRelease})`} </label>
            </Typography>
            <Typography
              fontSize={"14px"}
              color={"white"}
              // sx={{ fontWeight: "bold" }}
            >
              {result?.release_date}
              {` (${result?.original_language.toUpperCase()}) `}{" "}
              {result?.genres.map((item) => item.name + ",")}{" "}
              {result?.runtime + " " + "m"}
            </Typography>
            <Rating
              name="size-small"
              defaultValue={result?.vote_average}
              max={10}
              size="small"
            />
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <Stack direction="row" spacing={5}>
              <IconButton
                alt={"favorite"}
                disableRipple
                aria-label="delete"
                style={iconButtonStyle}
              >
                <FavoriteIcon
                  color="inherit"
                  fontSize="inherit"
                  style={iconStyle}
                />
              </IconButton>
              <IconButton
                aria-label="delete"
                alt={"favorite"}
                disableRipple
                style={iconButtonStyle}
              >
                <PlaylistAddIcon
                  color="inherit"
                  fontSize="inherit"
                  style={iconStyle}
                />
              </IconButton>
              <IconButton
                alt={"favorite"}
                disableRipple
                aria-label="add an alarm"
                style={iconButtonStyle}
              >
                <BookmarkIcon
                  color="inherit"
                  fontSize="inherit"
                  style={iconStyle}
                />
              </IconButton>
              <IconButton
                alt={"favorite"}
                disableRipple
                aria-label="add to shopping cart"
                style={iconButtonStyle}
              >
                <StarIcon
                  color="inherit"
                  fontSize="inherit"
                  style={iconStyle}
                />
              </IconButton>
              <IconButton
                alt={"favorite"}
                disableRipple
                aria-label="add to shopping cart"
                style={{ background: "none", width: "40px", height: "40px" }}
              >
                <PlayArrowIcon
                  color="inherit"
                  fontSize="inherit"
                  style={{ fontSize: "50px", color: "white" }}
                />
                <Typography
                  fontSize={"12px"}
                  color={"white"}
                  sx={{
                    fontWeight: "bold",
                    "@media (max-width: 500px)": {
                      display: "none",
                    },
                  }}
                >
                  Play Trailer
                </Typography>
              </IconButton>
            </Stack>
          </Grid>

          <Grid item>
            <Typography
              fontSize={"16px"}
              color={"#b0afaf"}
              gutterBottom
              sx={{ fontStyle: "oblique" }}
            >
              {result?.tagline}
            </Typography>
            <Typography
              fontSize={"24px"}
              color={"white"}
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Overview
            </Typography>
            <Typography
              fontSize={"16px"}
              color={"white"}
              // sx={{ fontWeight: "bold" }}
            >
              {result?.overview}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              fontSize={"24px"}
              color={"white"}
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Production
            </Typography>
            <Grid container justifyContent={"space-between"}>
              {result?.production_companies.map((item) => {
                return (
                  <>
                    <Grid item xs={12} sm={12} md={6} xl={6}>
                      <Typography
                        key={item.id}
                        fontSize={"16px"}
                        color={"#b0afaf"}
                        gutterBottom
                        sx={{ fontStyle: "oblique" }}
                        // sx={{ fontWeight: "bold" }}
                      >
                        {item?.name + ` (${item?.origin_country})`}
                      </Typography>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        {/* ************************** */}
      </Grid>
    </Grid>
  );
}
