"use client"
import {useState} from "react"
import {movies} from './details.js';
import Logo from './logo.js';
import  './header.css';
import Movierow from './movie_row.js';
export default function App(){
    const[name,setName]=useState(movies)
    function handleDeleteMovie(id){
        const newMovieList=name.filter(movie =>movie.id!=id);
        setName(newMovieList)
    }
    const Buttons=(props)=>{ 
        const[num, setNum]=useState(0);
        function voteUp(){
            setNum(num+1)       
        };
        function voteDown(){
            setNum(num-1)        
        };
        return (
            <>
                <div className="B">
                    <div className="a">
                        <button onClick={voteUp}><img src="Icon - Like.svg" alt="Header"/></button> 
                    </div> 
                    <div className="b">
                        <p>{num}</p>
                    </div>
                    <div className="c">
                        <button onClick={voteDown}><img src="Icon - disLike.svg" alt="Header"/> </button>
                    </div>
                </div>
            </>
        );
     };
    
    return (
         <>
            <div className="t">
                <Logo/>
                {name.map(movie=>
                     <Movierow
                        name={movie.name}
                        description={movie.description}
                        image={movie.image}
                        genere={movie.genere}
                        year={movie.year}
                        duration={movie.duration}
                        onDelete={()=>handleDeleteMovie(movie.id)}
                    />
                
                 )}                                                                                                                                                                                                                                                                                                                 
             </div>
        </>
    );
};
export default Buttons
