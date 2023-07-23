

"use client"
import React,{useState} from "react";
export default function Buttons(props){ 
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
    
    
    


