import React, { useReducer, createContext } from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from '../SaladBuilder/SaladBuilder';
import SaladSummary from '../SaladSummary/SaladSummary';

const useStyles = createUseStyles({
    wrapper: {
        
    }
});

export const SaladContext = createContext();

function reducer(state, item) {
    return [...state, item]
}

export default function SaladMaker() {
    const classes = useStyles();
    const [salad, setSalad] = useReducer(reducer, []);

return(
    <>
    <SaladContext.Provider value={{ salad, setSalad }}>
    <h1 className={classes.wrapper}>
        Build a Custom Salad
    </h1>
        <SaladBuilder />
        <SaladSummary />
        </SaladContext.Provider>
    </>
)
}