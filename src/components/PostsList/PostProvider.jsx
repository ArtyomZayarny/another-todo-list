import React, {useState, useEffect}from 'react'
import apiClient from '../apiClient'

export default function PostProvider(props) {
    const [data,setData] = useState({
        posts:[]
})


useEffect( () => {
  
    apiClient.get('/todos').
    then( res => {
        setData({...data, posts:res.data})
    })

}, [])
  return props.children(data.posts)
}
