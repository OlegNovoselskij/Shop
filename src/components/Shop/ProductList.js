'use client'
import ProductItem from './ProductItem';
import { useEffect, useState } from "react";
import { getAllProducts } from '@/http';
import Loading from './loading';
import { useSearchParams, useRouter } from 'next/navigation';

function ProductList({ selectedCategory, selectedSort }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get("category"); 
    
    useEffect(() => {
        async function fetchProducts() {
            const data = await getAllProducts();
            setProducts(data);
            setIsLoading(false);
        }
        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen">
                <div className="absolute top-0 left-0 right-0 flex justify-center items-center w-full h-full">
                    <Loading />
                </div>
            </div>
        );
    }

    // Фільтрація за категорією
    let filteredProducts = products;
    
    if (selectedCategory) {
        filteredProducts = products.filter(item => item.categoryId === selectedCategory);
    } else if (category === 'woman') {
        filteredProducts = products.filter(item => item.categoryId === 2);
    } else if (category === 'men') {
        filteredProducts = products.filter(item => item.categoryId === 1);
    }

    if (selectedSort) {
        filteredProducts = [...filteredProducts].sort((a, b) => {
            switch (selectedSort) {
                case "Name (A-Z)":
                    return a.name.localeCompare(b.name);
                case "Name (Z-A)":
                    return b.name.localeCompare(a.name);
                case "Price (low to high)":
                    return a.price - b.price;
                case "Price (high to low)":
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filteredProducts.map((item) => (
                <ProductItem 
                    key={item.id} 
                    handleClickOnProduct={() => router.push(`/shop/${item.id}`)} 
                    id={item.id} 
                    image={item.imageUrl} 
                    title={item.name} 
                    price={item.price} 
                />
            ))}
        </div>
    );
}

export default ProductList;
