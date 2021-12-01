import React from 'react';
import SaladItem from '../SaladItem/SaladItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: [10, 50],
        justifyContent: 'center',
    }
    });
    const ingredients = [
    {
        image: '🍎',
        name: 'apple',
    },
    {
        image: '🌽',
        name: 'sweetcorn',
    },
    {
        image: '🍄',
        name: 'mushroom',
    },
    {
        image: '🍅',
        name: 'tomato',
    },
    {
        image: '🍷',
        name: 'red wine dressing',
    },
    {
        image: '🍚',
        name: 'seasoned rice',
    },
    { 
        image: '🍆',
        name: 'aubergine',
    },
    { 
        image: '🍊',
        name: 'watermelon',
    }
    ];

export default function SaladBuilder() {
    const classes = useStyles();

return(
    <div className={classes.wrapper}>
        {
            ingredients.map(ingredient => (
                <SaladItem
                    key={ingredient.name}
                    image={ingredient.image}
                    name={ingredient.name}
                />
            ))
        }
    </div>
)
}