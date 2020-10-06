import React, {useState, useEffect} from 'react';
import UsersProvider from '../../components/Providers/UsersProvider'
import { Button, Modal,Input,Select } from 'semantic-ui-react';
import styles from './Form.module.css';



export default function Form ({setOpen, ...props}) {
    const [data,setData] = useState({
        text:'',
        user:'',
        userId:'',
        error:false,
        errorField:"",
        errorMsg:"",

    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.user) {
          setData({...data, error:true, errorField:'user', errorMsg:'This field is required'});
        }   
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

    // useEffect( () => {
      

    // }, [data.user])
 

      return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
              <div className="inputs">
                <Input className={styles.inputs}
                       value={data.text} 
                       onChange={(e)=>{handleChange(e.target)}} 
                       name="text" 
                       placeholder="What need to do?"
                       required={true} 
                />
              </div>
              <div className="inputs">
                <UsersProvider>
                 {(usersList) =>  <Select 
                                         onChange={handleSelect}
                                         className={styles.inputs} 
                                         name="user" placeholder='Assign to'  
                                         options={usersList}
                                         value={data.user} 
                                         required={true}
                                         /> }
                </UsersProvider>
                 {data.error && data.errorField === 'user' && <span>{data.errorMsg}</span> }
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