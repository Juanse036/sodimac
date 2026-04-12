import { useState, useEffect } from 'react';

import { useParams, useLocation } from 'react-router-dom';
import type { Product } from '../../types/product';

import { Loader } from '../../components/Loader';
import { NotFoundProduct } from './components/NotFoundProduct';
import { ProductDetailView } from './ProductDetailView';


export const ProductDetailPage = () => {

    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const [product, setProduct] = useState<Product | null>(null);

    const [loading, setLoading] = useState(true);

    /* USE EFFECT PARA VERIFICA SI EXISTE DATA DEL ELEMENTO GUARDADA*/
    useEffect(() => {
        const state = location.state as { product: Product } | undefined;

        if (state?.product) {
            setProduct(state.product);
            setLoading(false)
        }
        const savedProduct = localStorage.getItem('selected_product');

        if (savedProduct) {
            const parsedProduct = JSON.parse(savedProduct) as Product;
            if (parsedProduct.productId === id) {
                setProduct(parsedProduct);
                setLoading(false)
            }

        }
    }, [id, location.state]);


    if (loading) return <Loader />


    if (!product) {
        setLoading(false)
        return (
            <NotFoundProduct />
        );
    }
    return <ProductDetailView product={product} />
    
};
