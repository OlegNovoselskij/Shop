import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchBar({ onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (query.trim()) {
                handleSearch();
            } else {
                setResults([]);
                setIsVisible(false);
            }
        }, 300); // `debounce` на 300 мс

        return () => clearTimeout(delaySearch);
    }, [query]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/products?search=${query}`);
            if (!response.ok) throw new Error("Failed to fetch search results");
            
            const data = await response.json();
            setResults(data);
            setIsVisible(true);
        } catch (error) {
            console.error("Error searching products:", error);
        }
    };

    const handleProductClick = () => {
        setIsVisible(false);
        setQuery(""); // Очистка рядка пошуку після вибору товару
    };

    return (
        <div className="bg-[#1a1a1a] h-10 flex items-center w-full max-w-3xl mx-auto rounded relative">
            <Search className="ml-2 text-gray-400" />
            <input
                type="text"
                placeholder="Search Products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent tracking-tight opacity-75 w-full px-2 text-sm outline-none border-none placeholder-gray-400"
            />
            <button onClick={onClose} className="hover:text-gray-400 text-gray-100 text-lg px-3">✖</button>

            {isVisible && results.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-black text-white mt-1 p-2 rounded shadow-lg max-h-60 overflow-auto">
                    {results.map(product => (
                        <Link 
                            key={product.id} 
                            href={`/shop/${product.id}`} 
                            className="block px-2 py-1 hover:bg-gray-800"
                            onClick={handleProductClick}
                        >
                            {product.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
