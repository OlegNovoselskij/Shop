'use client'
import Link from 'next/link';

export default function ManAndWomanPart() {
    return (
        <div className="flex justify-center bg-[#1a1a1a] py-16">
            <div className="flex space-x-32 sm:space-x-16 w-full max-w-screen-lg">
                <Link href="/shop?category=men">
                    <div className="relative w-[20vw] h-[20vw] sm:w-[25vw] sm:h-[25vw] overflow-hidden group">
                        <img
                            src="/men.avif"
                            alt="Men"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-4xl sm:text-3xl font-extrabold">MEN</span>
                        </div>
                    </div>
                </Link>
                <Link href="/shop?category=women">
                    <div className="relative w-[20vw] h-[20vw] sm:w-[25vw] sm:h-[25vw] overflow-hidden group">
                        <img
                            src="/woman.webp"
                            alt="Women"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-4xl sm:text-3xl font-extrabold">WOMEN</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
