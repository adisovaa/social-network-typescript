import React from 'react';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={'hello'} likesCount={34}/>
            <Post message={'my love'} likesCount={23}/>
        </div>
    );
};