'use client'
import Modal from './MostPopularModal'
import ProductList from "./ProductList";
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function ShopMain() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSort, setSelectedSort] = useState('Price (high to low)'); 
    const router = useRouter();

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        router.push("/shop")
    };

    const handleSortChange = (sortOption) => {
        setSelectedSort(sortOption); 
    };

    return (
        <div className="bg-black text-white mt-[12rem] flex justify-center">
            <aside className="w-2/12 p-9">
                <h3 onClick={() => setSelectedCategory(null)} 
                    className="font-family-aktiv-grotesk relative font-medium tracking-tight font-bold text-lg mb-4 cursor-pointer">
                    All Products
                </h3>
                <ul className="space-y-2">
                    <li 
                        onClick={() => handleCategoryClick(1)} 
                        className={`cursor-pointer hover:opacity-75 ${selectedCategory === 1 ? 'opacity-75' : ''}`}>
                        Mens
                    </li>
                    <li 
                        onClick={() => handleCategoryClick(2)} 
                        className={`cursor-pointer hover:opacity-75 ${selectedCategory === 2 ? 'opacity-75' : ''}`}>
                        Womens
                    </li>
                </ul>
            </aside>
            <main className="w-1/2 p-8">
                <div className="flex justify-between items-center mb-6 relative">
                    <h2 className="text-2xl font-bold font-family-aktiv-grotesk">
                        All Products
                    </h2>
                    <Modal onSortChange={handleSortChange} selectedSort={selectedSort} />
                </div>
                <ProductList selectedCategory={selectedCategory} selectedSort={selectedSort} />
            </main>
        </div>
    );
}
