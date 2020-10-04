import React, {useRef, useState,useImperativeHandle} from 'react';
import UsersProvider from '../../components/Providers/UsersProvider'
import { Button, Modal,Input,Select } from 'semantic-ui-react';
import styles from './Form.module.css';


export default function Form ({setOpen, ...props}) {
   const inputText = useRef();
    const [data,setData] = useState({
        text:'',
        user:'',
        userId:'',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sent')
        console.log('ref', inputText)
    }
    const handleChange = ({name,value, ...target}) => {
        console.log(name,value)
        setData({...data, [name]:value})
    }
    const handleSelect = (data,target) =>  {
       console.log(target)
    //    console.log(target.name);
    //    console.log(target.value)
    }
 

      return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input type="text" ref={inputText} />
              <div className="inputs">
                <Input className={styles.inputs} value={data.text} onChange={(e)=>{handleChange(e.target)}} name="text" placeholder="What need to do?" />
              </div>
              <div className="inputs">
                <UsersProvider>
                 {(usersList) =>  <Select 
                                         onChange={handleSelect}
                                         className={styles.inputs} 
                                         name="user" placeholder='Assign to'  
                                         options={usersList}   
                                         /> }
                </UsersProvider>
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