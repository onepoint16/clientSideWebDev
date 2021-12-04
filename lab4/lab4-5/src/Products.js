import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";


const Products = ({ match }) => {
    const productData= [
        {name:"carrot cake",description:"home made here",price:"2.50",category:"cake",available:"no",id:1},
        {name:"sandwiches",description:"with a variety of fillings",price:"2.50",category:"snack",available:"no",id:2},
        {name:"salad",description:"uses seasonal local produce",price:"3.50",category:"side",available:"yes",id:3},
        {name:"hot chocolate",description:"with fully fat or skimmed milk",price:"2.00",category:"drinks",available:"no",id:4},
        {name:"soup",description:"ask for soups available today",price:"2.00",category:"snack",available:"yes",id:5},
        {name:"pizza",description:"ham and pineapple or four cheese",price:"5.00",category:"main",available:"yes",id:6},
        {name:"baked potato",description:"with cheese, coleslaw, beans or tuna",price:"4.50",category:"main",available:"yes",id:7},
        {name:"chocolate cake",description:"with cream",price:"2.50",category:"cake",available:"yes",id:8},
        {name:"apple pie",description:"with cream or custard",price:"3.50",category:"pudding",available:"yes",id:9},
        {name:"cheesecake",description:"with cream",price:"3.00",category:"pudding", available:"yes",id:10},
        {name:"fish and chips",description:"locally caught ",price:"6.50",category:"main",available:"yes",id:11},
        {name:"lasagne",description:"with chips or garlic bread",price:"6.50",category:"main",available:"yes",id:12},
        {name:"ice cream",description:"various flavours",price:"2.50",category:"pudding",available:"yes",id:13},
        {name:"coffee",description:"freshly ground",price:"1.50",category:"drinks",available:"yes",id:14},
        {name:"pasta",description:"with a tomato and garlic sauce",price:"5.50",category:"main",available:"yes",id:15}
    ];

    const { url } = useRouteMatch();

    /* Create an array of `<li>` items for each product */
    const linkList = productData.map((product) => {
        return (
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.name}</Link>
            </li>
        );
    });

    return (
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                        <ul>{linkList}</ul>
                </div>
            </div>
            <Route path={`${url}/:productId`}>
                <Product data={productData} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product.</p>
            </Route>
        </div>
        );
};

export default Products;