import React, {useState, useEffect} from 'react'
import { List, Button, Modal} from 'semantic-ui-react';
import Form from '../../components/Form/Form'
import styles from './PostList.module.css'
import TodoItem from '../TodoItem/TodoItem'

export default function PostList({updatePost,isFetching,addTodo, ...props}) {
    
    const [open, setOpen] = useState(false);
    const [posts,setPost] = useState([])
    useEffect( () => {
        if (props.posts.length > 0) {
            setPost(props.posts)
        }     
    }, [props.posts])
  
    return (
        
         <div className={styles.list}>
             <div className={styles.title}>
                 <h3>TodoList</h3>
                 <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button>Create Task</Button>}
                >
                <Modal.Header>Create new task</Modal.Header>
                <Modal.Content image>
                    { open && <Form setOpen={setOpen} addTodo={addTodo}/> }
                </Modal.Content>
                </Modal>
             </div>
            <List celled >
                { posts.map( post => <TodoItem  key={post.id} isFetching={isFetching} updatePost={updatePost} {...post}/>) }
            </List>
         </div>
    )
}
