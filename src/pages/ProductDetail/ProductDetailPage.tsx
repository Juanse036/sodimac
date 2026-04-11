import { useState, useEffect } from 'react';

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import type { Product } from '../../types/product';

import { ProductDetailView } from './ProductDetailView';
export const ProductDetailPage = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState<Product | null>(null);


    /* USE EFFECT PARA VERIFICA SI EXISTE DATA DEL ELEMENTO GUARDADA*/
    useEffect(() => {
        const state = location.state as { product: Product } | undefined;

        if (state?.product) {
            setProduct(state.product);
        } else {
            const savedProduct = localStorage.getItem('selected_product');
            if (savedProduct) {
                const parsedProduct = JSON.parse(savedProduct) as Product;
                if (parsedProduct.productId === id) {
                    setProduct(parsedProduct);
                } else {
                    navigate('/')
                }
            } else {
                navigate('/')
            }
        }
    }, [id, location.state]);

    if (!product) {
        return (
            <div >
                <p>Cargando producto...</p>
                <button onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
        );
    }

    
    return (
        <ProductDetailView product={product} />
    );
};
