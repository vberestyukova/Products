import React, {useState} from "react";
import {ProductInterface} from "../models";

interface ProductProps {
    product : ProductInterface
}

export function Product( {product} : ProductProps ) {
    const [details, setDetails] = useState(false);

    const buttonClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

    const buttonClasses = ['py-2 px-4 border rounded', buttonClassName]
    return(
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <p className='text-lg'>{product.title}</p>
            <p className='font-bold'>${product.price}</p>
            <button className= {buttonClasses.join(' ')}
            onClick={() => setDetails(!details)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <p>{product.description}</p>}
            {product.rating.rate && <div className='font-bold'>Rate: {product.rating.rate}</div>}
        </div>
    )
}
