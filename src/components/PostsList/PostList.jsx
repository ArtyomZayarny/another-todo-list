import React, {useState, useEffect,useContext} from 'react'
import { List, Button, Modal, Dimmer,Loader, Radio} from 'semantic-ui-react';
import Form from '../../components/Form/Form'
import styles from './PostList.module.css'
import TodoItem from '../TodoItem/TodoItem'
import {ThemeContext} from '.././../App'

export default function PostList({updatePost,fetching,addTodo,deleteTodo, ...props}) {
    
    const [open, setOpen] = useState(false);
    const [posts,setPost] = useState([])
    const themeContext = useContext(ThemeContext) 

    useEffect( () => {
   
        if (props.posts.length > 0) {
            setPost(props.posts)
        }     
    }, [props.posts,fetching])

    const handleChange = (event,target) => {
        if (target.checked) {
            themeContext.setTheme('dark')
        } else {
            themeContext.setTheme('light')
        }
    }
  
    return ( 
         <div className={styles.list}>
             <Dimmer active={fetching === true} inverted>
                        <Loader size="mini">Loading...</Loader>
                </Dimmer>
             <div className={styles.title}>
                <div className="theme">
                    <label >Dark theme</label>
                    <Radio toggle onChange={handleChange} />
                </div>
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
                { posts.map( post => <TodoItem  key={post.id} deleteTodo={deleteTodo} updatePost={updatePost} {...post}/>) }
            </List>
         </div>
    )
}
