import React from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import MovieDetail from "@/components/movie/MovieDetail";
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation'

export default async function MovieDetailPage({ params }) {
  const { id } = params;
  const token = cookies().get('token')?.value
  const result = await ServiceWeb.getMovie(token,id)
  if(result?.isInvalidToken){
    redirect('/user/login');
  }
  console.log('result',result)

  return (
    <>
    <MovieDetail result={result}/>
    
    </>
  );
}
