import React, { useReducer } from 'react';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    }

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
}

const products = [{
    name: 'lettuce',
    price: 1.00
    },
    {
    name: ' aubergine ',
    price: 2.5,
    },
    {
    name: 'tomato',
    price: 1.99
    },
    {
    name: 'cucumber',
    price: 0.80
    }
    ];

function cartReducer(state, action) {
    switch(action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if(productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1)
            return update
        default:
            return state;
        }
    }

export default function Product() {
    const [cart, setCart] = useReducer(cartReducer, []);

    function add(product) {
        setCart({ product, type: 'add' });
    }

    function remove(product) {
        setCart({ product, type: 'remove' });
    }

return(
    <div className="wrapper">
    <div>
        {products.map(product => (
            <div key={product.name}>
                <div className="product"> <span>{product.name}</span></div>
            <button onClick={() => add(product)}>Add</button>
            <button onClick={() => remove(product)}>Remove</button>
            </div>
        ))}
    </div>
        <div>Number of items: {cart.length} </div>
        <div>Total: {getTotal(cart)}</div>
    </div>
    )
}