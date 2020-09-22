import React, {useState, useEffect} from 'react'
import { Icon, List } from 'semantic-ui-react';
import styles from './PostList.module.css'

export default function PostList(props) {
    

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
                { posts.map( post => 
                <List.Item  
                    className={styles.item} 
                    key={post.id}>
                        <div className="status">
                            {post.completed ? <Icon name="chevron circle down"/> : '' } 
                        </div>
                         <List.Content className={styles.itemContent}>
                            <span className={styles.itemTitle}>{post.title}</span>
                            <Icon name="trash"/>
                         </List.Content>
                </List.Item>) }
            </List>
         </div>
    )
}
