import React from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';


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
