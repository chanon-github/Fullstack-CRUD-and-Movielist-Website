import React from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import MovieDetail from "@/components/movie/MovieDetail";
export default async function MovieDetailPage({ params }) {
  const { id } = params;
  const url = `${ServiceWeb.movieDetailAPI}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(url);
  const result = await response.json();

  return (
    <>
    <MovieDetail result={result}/>
    
    </>
  );
}
