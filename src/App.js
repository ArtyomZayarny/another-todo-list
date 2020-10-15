import React, { useState} from 'react'; 
import './App.css';
import PostList from './components/PostsList/PostList';
import PostProvider from './components/PostsList/PostProvider';

export const ThemeContext = React.createContext();

const App = () => {
  const [theme,setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`App ${theme}`}>
        <PostProvider>
          { (posts,updatePost,addTodo,fetching,deleteTodo) => <PostList  deleteTodo={deleteTodo} fetching={fetching} updatePost={updatePost}  posts={posts} addTodo={addTodo}/> }
        </PostProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
