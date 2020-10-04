import React, { useEffect, useState } from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';
import { Button, Modal,Input,Select } from 'semantic-ui-react';
import Form from './components/Form/Form'

const App = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Create Task</Button>}
      >
      <Modal.Header>Create new task</Modal.Header>
      <Modal.Content image>
        { open && <Form setOpen={setOpen}/> }
      </Modal.Content>
     
    </Modal>
        <PostProvider>
          { (posts,updatePost) => <PostList  updatePost={updatePost}  posts={posts}/> }
        </PostProvider>
    </div>
  );
}

export default App;
