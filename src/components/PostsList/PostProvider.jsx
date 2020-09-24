import {useState, useEffect}from 'react'
import apiClient from '../apiClient'

export default function PostProvider(props) {
    const [data,setData] = useState({
        posts:[]
})
const [isLoading,setLoading] = useState(false)


useEffect( () => {
  
    apiClient.get('/todos').
    then( res => {
        setData({...data, posts:res.data})
    })

}, []);
const updatePost = (id, status) => {
    setLoading(true);
     apiClient.put(`/todos/${id}`, {name:status})
     .then(res => {
            
        const updatedPosts = data.posts.map( (post) => {
            if (post.id === id) {
                post.completed = status;
            }
            return post;
        });
        setData({...data,updatedPosts })
        setLoading(false)        
     })
     .catch(error => {
        console.log(error);
      })
}
  return props.children(data.posts, updatePost, isLoading)
}
