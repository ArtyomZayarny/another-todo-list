import React from 'react'; 
import './App.css';
import PostList from './components/PostList';
import PostProvider from './components/PostProvider';

const App = () => {
  return (
    <div className="App">
      <PostProvider>
        { (posts) => <PostList posts={posts}/> }
      </PostProvider>
  
    </div>
  );
}

export default App;
