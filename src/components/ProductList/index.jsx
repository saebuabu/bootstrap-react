import './styles.css'
import NavigatieHeader from '../NavigatieHeader';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=5&skip=${count === 0 ? 0 : count * 5}`);
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setProducts(products => [...products, ...result.products]);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
        finally {
            setLoading(false);
        }
    }

    //fetch products on initial load en when count changes
    useEffect(() => {
        fetchProducts()
    }, [count]);
    

if (loading) {
    return <div>Loading...</div>;
}


return (
    <>
        <NavigatieHeader />
        <h2>Product List</h2>
        <div className="container product-list">
            {
                products && products.length ? products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <h3>{product.title}</h3>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                    )
                }) : <div>No products found</div>
            }
        </div>
        <div className="lm-div">
            <button onClick={() => setCount(count + 1)}>Load More</button>
        </div>
    </>
);

}