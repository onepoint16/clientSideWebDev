import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {

    const { productId } = useParams();

    const product = data.find(p => p.id === Number(productId));

    let productData;

    if (product) {
        productData = (
            <div>
                <h3>{product.name} </h3>
                <p> {product.description} </p>
                <p> {product.price} </p>
            </div>
        );
    } else {
        productData = <h2> Sorry not stocked </h2>;
    }

    return (
        <div>
            <div>{productData}</div>
        </div>
    );
};

export default Product;