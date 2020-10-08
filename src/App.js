import React, { useEffect, useState } from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';

const App = () => {
  return (
    <div className="App">
        <PostProvider>
          { (posts,updatePost,addTodo) => <PostList  updatePost={updatePost}  posts={posts} addTodo={addTodo}/> }
        </PostProvider>
    </div>
  );
}

export default App;
