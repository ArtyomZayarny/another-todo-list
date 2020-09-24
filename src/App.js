import React, { useState } from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';



const App = () => {

  const[modalVisible,setModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={setModalVisible}>Add Task</button>
      {/* {modalVisible && <div className="modal">
        <div className="modal__content">
          <form >
            <input type="text"/>
            <button>Add Post</button>
          </form>
        </div>
  </div> } */}
        <PostProvider>
          { (posts,updatePost, isLoading) => <PostList  isLoading={isLoading} updatePost={updatePost}  posts={posts}/> }
        </PostProvider>
    </div>
  );
}

export default App;
