"use client"
import React, { useState } from 'react';

export default function Buttons(props) {
    const[likes,setLikes]=useState(props.like)

    function voteUp() {
        setLikes(likes + 1)
    }

    function voteDown() {
        setLikes(likes - 1)
    }

    return (
        <>
          <div className="B">
            <div className="a">
              <button
                onClick={() => {
                  voteUp();
                  props.onUpdateRating(props.movie_id, likes);
                }}
              >
                <img src="Icon - Like.svg" alt="Header" />
              </button>
            </div>
            <div className="b">
              <p style={{ color: 'white' }}>{likes}</p>
            </div>
            <div className="c">
              <button
                onClick={() => {
                  voteDown();
                  props.onUpdateRating(props.movie_id, likes);
                }}
              >
                <img src="Icon - disLike.svg" alt="Header" />
              </button>
            </div>
          </div>
        </>
  );
}
