import React, { useEffect, useState } from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';
import { Button, Modal,Input,Select } from 'semantic-ui-react';
import { useForm} from "react-hook-form";
import UsersProvider from './components/Providers/UsersProvider'


// export function Select({ register, options, name, ...rest }) {
//   return (
//     <select name={name} ref={register} {...rest}>
//       {options.map(value => (
//         <option key={value} value={value}>
//           {value}
//         </option>
//       ))}
//     </select>
//   );
// }

const App = () => {
  const [open, setOpen] = React.useState(false);
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
            
              <Input name="example" defaultValue="test" ref={register}/>

              <UsersProvider>
                 {  (usersList) =>  <Select placeholder='Assign to' options={usersList}  /> }
              </UsersProvider>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              
              <Modal.Actions>
                  <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    content="Save"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                  />
              </Modal.Actions>
           </form>
      </Modal.Content>
     
    </Modal>
        <PostProvider>
          { (posts,updatePost) => <PostList  updatePost={updatePost}  posts={posts}/> }
        </PostProvider>
    </div>
  );
}

export default App;
