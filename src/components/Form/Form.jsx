import React, {useState, useEffect} from 'react';
import UsersProvider from '../../components/Providers/UsersProvider'
import { Button, Modal,Input,Select } from 'semantic-ui-react';
import styles from './Form.module.css';



export default function Form ({setOpen,addTodo, ...props}) {
    const [data,setData] = useState({
        title:'',
        user:'',
        userId:'',
        error:false,
        errorField:"",
        errorMsg:"",

    })
   const create = () => {
      const {userId,title} = {...data};
      const todo = Object.assign({}, {userId,title,completed:false});
      setOpen(false)
      addTodo(todo)
   }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.user) {//Required field is empty
          return setData({...data, error:true, errorField:'user', errorMsg:'This field is required'});
        } 
        create();  
    }
    const handleChange = ({name,value, ...target}) => {
        setData({...data, [name]:value})
    }
    const handleSelect = (obj,target) =>  {
        let usersList = target.options;
        const user = usersList.filter( item => item.text === target.value);
        const userId = user[0].key;
        setData({...data, user:target.value,userId})
    }

    useEffect( () => {
      //Clear errors
      setData({...data,error:false, errorField:'', errorMsg:'' });
    }, [data.user]);
    
    return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
              <div className="inputs">
                <Input className={styles.inputs}
                       value={data.text} 
                       onChange={(e)=>{handleChange(e.target)}} 
                       name="title" 
                       placeholder="What need to do?"
                       required={true} 
                />
              </div>
              <div className="inputs">
                <UsersProvider>
                 {(usersList) =>  <Select 
                                         onChange={handleSelect}
                                         className={`${styles.select} ${data.errorField === 'user' ? styles.user : '' }`} 
                                         name="user" placeholder='Assign to'  
                                         options={usersList}
                                         value={data.user} 
                                         required={true}
                                         /> }
                </UsersProvider>
                 {data.error && data.errorField === 'user' && <span className={styles.errorMsg}>{data.errorMsg}</span> }
              </div>
              <div className="btn-area">
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                     Cancel
                   </Button>
                   <Button
                         content="Save"
                         labelPosition='right'
                         icon='checkmark'
                         positive
                   />
               </Modal.Actions>
              </div>
          </form>
      )
}