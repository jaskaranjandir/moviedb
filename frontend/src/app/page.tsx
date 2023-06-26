"use client";
import { useEffect, useState } from "react";
type Movie={
  id:number,
  title:string,
  image:string,
  description:string
}


export default function Home(){
  const [movies,setMovies] = useState([]);
  

  useEffect(()=>{
    fetch('http://localhost:8000/')
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.log(error))
  },[]);

  return(
    <ul className="grid gap-3 w-100 ">
      {movies.map((movie:Movie)=>(
        <li className="grid gap-2 ">
          <div className="container mx-auto flex flex-wrap   w-100  bg-slate-100 dark:text-slate-800 p-4 rounded">
            <div style={{width:150+'px',height:150+'px'}}  className="flex flex-wrap">
              <img src={movie.image} style={{width:150+'px',height:150+'px'}} className="rounded self-center container w-100 " alt={movie.title}  />
            </div>
            <div className="flex flex-wrap mx-2  my-2 w-100 ">
            <h3 className="w-100 my-2"><strong>Title:</strong> {movie.title}</h3>
            <p><strong>Description:</strong><br/> {movie.description}</p>
            </div>
            
          </div>
        </li>
      ))}
    </ul>
  )
}