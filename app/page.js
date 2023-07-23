"use client"
import Buttons from "./button.js"
import {useState} from "react"
import {movies} from './details.js';
import Logo from './logo.js';
import  './header.css';
import Movierow from './movie_row.js';
import Addmovie from "./addmovie.js"
import Form from "./addmovie.js"
export default function App(){
    const [cenimas,setCenimas]=useState(movies);
    function handleRating(id,likes){
        const updatedMovies=cenimas.map((movie)=>{
            if (movie.id===id){
                return{
                    ...movie,votes:likes
                }
            }
            return movie
       });
       const sortedMovies=updatedMovies.sort((a,b)=>b.votes-a.votes)
       setCenimas(sortedMovies);
    }
    function handleDeleteMovie(id){
        const newMovieList=cenimas.filter(movie =>movie.id!=id);
        
        setCenimas(newMovieList)
    }
    return (
         <>
            <div className="t">
                <Logo/>
                {cenimas.map(movie=>
                     <Movierow
                        name={movie.name}
                        description={movie.description}
                        image={movie.image}
                        genere={movie.genere}
                        year={movie.year}
                        duration={movie.duration}
                        onDelete={()=>handleDeleteMovie(movie.id)}
                        like={movie.votes}
                        onUpdateRating={handleRating}
                        movie_id={movie.id} 
                      />
                    
                 )}  
                 <Form/>
                                                                                                                                                                                                                                                                                                             
             </div>
        </>
    );
};
  
