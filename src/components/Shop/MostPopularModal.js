'use client'
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CLASSNAMELI = "font-bold text-gray-400 cursor-pointer font-family-aktiv-grotesk hover:brightness-125"

export default function Modal({ onSortChange, selectedSort }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSortChange = (sortOption) => {
        onSortChange(sortOption); // Pass selected sort to the parent
        setIsOpen(false); // Close modal after selection
    };

    return (
        <div className="relative">
            <div
                className="flex text-gray-400 cursor-pointer font-family-aktiv-grotesk relative items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedSort}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown />
                </motion.div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-2 bg-[#161616] text-white p-6 shadow-lg z-50 w-64"
                >
                    <ul className="space-y-2">
                        <li onClick={() => handleSortChange("Name (A-Z)")} className={CLASSNAMELI}>Name (A-Z)</li>
                        <li onClick={() => handleSortChange("Name (Z-A)")} className={CLASSNAMELI}>Name (Z-A)</li>
                        <li onClick={() => handleSortChange("Price (low to high)")} className={CLASSNAMELI}>Price (low to high)</li>
                        <li onClick={() => handleSortChange("Price (high to low)")} className={CLASSNAMELI}>Price (high to low)</li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
}
