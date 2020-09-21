import React, {useState, useEffect} from 'react'

export default function PostList(props) {

    const [posts,setPost] = useState([])
    useEffect( () => {

        if (props.posts.length > 0) {
            setPost(props.posts)
        }
         
    }, [props.posts])
  
    return (
        <div>
         <h2>PostList</h2>
         <ul>
            { posts.map( post => <li key={post.id}>{post.title}</li>) } 
         </ul>
        </div>
    )
}
