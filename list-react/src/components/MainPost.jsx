import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function MainPost() {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            setPost(data)
        })
    }, [])
    return (
        <div>
            {
                post.slice(0,10).map((p)=> (
                    <p key={p.id}><Link to={`/post/${p.id}`} style={{textTransform: "uppercase"}}>{p.title}</Link></p>
                    
                ))
            }
        </div>
    )
}

export default MainPost;
