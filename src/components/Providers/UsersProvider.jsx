import {useState, useEffect} from 'react';
import apiClient from '../apiClient'

export default function UsersProvider (props) {
      const [data,setData] = useState({
            users:[]
      })
      useEffect(() => {

            if (data.users.length === 0) {
                  apiClient.get('/users').
                  then( res => {
                        //normalizeData
                        const usersList = res.data.map( (item) => {
                              const user = {};
                              user.key = item.id;
                              user.value = item.name;
                              user.text = item.name;
                              return user;
                        })
                         setData({...data, users:usersList})
                    })
            }
      }, [])

      return props.children(data.users)
}



