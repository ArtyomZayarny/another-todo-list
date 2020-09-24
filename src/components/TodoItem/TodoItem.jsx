import React from 'react';
import styles from '../TodoItem/TodoItem.module.css'
import { Icon, List, Container,Dimmer,Loader} from 'semantic-ui-react';

export default function TodoItem({updatePost, id, completed, title,isLoading, ...props}) {
    return (
        <>
            <Dimmer active={isLoading === true} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <List.Item  
                className={styles.item} 
                key={id}
                onClick={() =>{updatePost(id,!completed)}}
                >
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
