import React from 'react'
import Item from './item'
import css from './components.module.css';

const mainitem = (props) => {
    return (
        <div className={css.mainDiv}>
            {
                props.mainitem.map((item) => (
                    <ul className='list-group'>
                        <Item item={item}></Item>
                    </ul>
                ))
            }
        </div>
    )
}

export default mainitem