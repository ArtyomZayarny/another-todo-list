import React, {useState, useEffect} from 'react';
import styles from '../TodoItem/TodoItem.module.css'
import { Icon, List, Container,Dimmer,Loader} from 'semantic-ui-react';

export default function TodoItem({updatePost, id, completed, title,isFetching, ...props}) {
    const [loading,isLoading] = useState(false);


    const updateStatus = (id,status) => {
        isLoading(true);
        updatePost(id,status)
    }

    useEffect( () => {
      isLoading(false)
    },[completed])
  
    return (
        <>
            
            <List.Item  
                className={styles.item} 
                onClick={() =>{updateStatus(id,!completed)}}
                >
                <Dimmer active={loading === true} inverted>
                        <Loader size="mini">Loading...</Loader>
                </Dimmer>
                <div className="status">
                    {completed ? <Icon name="chevron circle down"/> : '' } 
                </div>
                <List.Content className={styles.itemContent}>
                    <span className={styles.itemTitle}>{title}</span>
                    <Icon name="trash"/>
                </List.Content>
            </List.Item>
        </>
    )
}
