import {useEffect, useState} from "react";
import {ProductInterface} from "../models";
import axios, {AxiosError} from "axios";

export function useProduct() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    async function fetchProducts() {
        try {
            setError('');
            setLoader(true);
            const response = await axios.get<ProductInterface[]>('https://fakestoreapi.com/products?limit=8');
            setProducts(response.data);
            setLoader(false);
        } catch(e) {
            const error = e as AxiosError;
            setLoader(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return {loader, error, products};
}
