import React, {useState, useEffect} from 'react'
import { List } from 'semantic-ui-react';
import styles from './PostList.module.css'
import TodoItem from '../TodoItem/TodoItem'

export default function PostList({updatePost,isFetching, ...props}) {
    

    const [posts,setPost] = useState([])
    useEffect( () => {

        if (props.posts.length > 0) {
            setPost(props.posts)
        }
         
    }, [props.posts])
  
    return (
        
         <div className={styles.list}>
             <div className="list__title">
                 <h3>Posts</h3>
             </div>
            <List celled >
                { posts.map( post => <TodoItem  key={post.id} isFetching={isFetching} updatePost={updatePost} {...post}/>) }
            </List>
         </div>
    )
}
