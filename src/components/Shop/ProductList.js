'use client';
import { Suspense, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getAllProducts } from '@/http';
import Loading from './loading';
import { useSearchParams, useRouter } from 'next/navigation';

function ProductList({ selectedCategory, selectedSort }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category'); 

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Optionally, set an error state to display a message to the user
            } finally {
                setIsLoading(false);
            }
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
    
    const activeCategory = selectedCategory || (category === 'woman' ? 2 : category === 'men' ? 1 : null);

    if (activeCategory) {
        filteredProducts = products.filter(item => item.categoryId === activeCategory);
    }

    // Сортування
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

export default function ProductListWithSuspense(props) {
    return (
        <Suspense fallback={<Loading />}>
            <ProductList {...props} />
        </Suspense>
    );
}
