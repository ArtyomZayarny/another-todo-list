import React, { useState } from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';



const App = () => {

  const[modalVisible,setModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={setModalVisible}>Add Task</button>
        <PostProvider>
          { (posts,updatePost) => <PostList  updatePost={updatePost}  posts={posts}/> }
        </PostProvider>
    </div>
  );
}

export default App;
