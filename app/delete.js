"use client"
import React,{useState} from "react"
import {movies} from "./details.js"
import  "./header.css"
export default function  Delete(props){
    return(
        <div className="del">
            <button onClick={()=>{props.onDelete()}}><img src="fluent_delete-32-regular.svg" alt="delete"/></button>
        </div>
    )
}
