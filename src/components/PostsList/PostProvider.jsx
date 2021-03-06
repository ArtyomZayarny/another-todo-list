import {useState, useEffect}from 'react'
import apiClient from '../apiClient'

export default function PostProvider(props) {
    const [fetching,isFetching] =  useState(false)
    const [data,setData] = useState({
        posts:[],
        activeId:''
})
useEffect( () => {

  if (data.posts.length === 0) {
    apiClient.get('/todos').
    then( res => {
        setData({...data, posts:res.data})
    })
  }
  
}, []);
const addTodo = (todo) => {
      isFetching(true);
      apiClient.post('/todos',todo)
      .then( (response) => {
        const todo = response.data;
        const posts = [...data.posts];
        posts.unshift(todo);
        isFetching(false)
        setData({...data,posts})
      })
      .catch(function (error) {
        console.log(error);
      }) 
}
const deleteTodo = (id) => {
  console.log('delete', id)
  isFetching(true);
  apiClient.delete(`/todos/${id}`)
  .then( (response) => {
    const posts = data.posts.filter( todo => id !== todo.id);
    setData({...data, posts})
    isFetching(false)
  })
  .catch(function (error) {
    console.log(error);
  }) 
}

const updatePost = (id, status) => {
    setData({...data, activeId:id});
     apiClient.patch(`/todos/${id}`, {name:status})
     .then(res => {
        const updatedPosts = data.posts.map( (post) => {
            if (post.id === id) {
                post.completed = status;
            }
            return post;
        });
        setData({...data,updatedPosts})     
     })
     .catch(error => {
        console.log(error);
      })
}
  return props.children(data.posts, updatePost,addTodo, fetching, deleteTodo)
}
