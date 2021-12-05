import React from 'react'

/* Components */
import Paragraph from './Paragraph'

const List = ({ items }) => {

    

    if (items.length === 0) {
        return <Paragraph>This list is empty</Paragraph>
    }

    return (
        <div>
            { items.map(item => (
                <div key={item.id} className='list'>
                    { item.body }
                </div>
            )) }
        </div>
    )
}

export default List