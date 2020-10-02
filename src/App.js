import React, { useState } from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { useForm } from "react-hook-form";



const App = () => {

  const[modalVisible,setModalVisible] = useState(false);
  const [open, setOpen] = React.useState(false)
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
              <input name="example" defaultValue="test" ref={register} />
              
              {/* include validation with required or other standard HTML validation rules */}
              <input name="exampleRequired" ref={register({ required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              
              <input type="submit" />
           </form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
        <PostProvider>
          { (posts,updatePost) => <PostList  updatePost={updatePost}  posts={posts}/> }
        </PostProvider>
    </div>
  );
}

export default App;
