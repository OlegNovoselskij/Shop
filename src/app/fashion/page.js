import React from "react";

const Lookbook = () => {
  return (
    <div className="bg-[HEX: #181414] flex flex-col items-center mt-28">
        <h1 className="color-[HEX: #636363] opacity-45 font-family-aktiv-grotesk text-4xl font-bold">LOOKBOOK</h1>

        <div className="flex justify-center items-center">
            
        <div className="max-w-5xl w-full gap-1 min-h-screen">
            <div className="grid grid-cols-3 gap-1 h-96 mb-2 mb-20">
                <img src="woman.webp" alt="Image 1" className="w-full h-full object-cover" />
                <img src="men.avif" alt="Image 2" className="w-full h-full object-cover" />
                <img src="tea.avif" alt="Image 3" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-3 gap-1 mt-32">
                <div className="flex flex-col gap-1">
                    <img src="mainPageBackgrd.jpg" alt="Image 4" className="w-full h-40 object-cover" />
                    <img src="socks.webp" alt="Image 5" className="w-full h-80 object-cover object-top" />
                </div>

                <div className="flex flex-col gap-1">
                    <img src="socks.jpg" alt="Image 6" className="w-full h-80 object-cover" />
                    <img src="shop_2.avif" alt="Image 7" className="w-full h-40 object-cover" />
                </div>

                <div className="flex flex-col gap-1">
                    <img src="relaxedTrousers.jpg" alt="Image 8" className="w-full h-40 object-cover object-bottom" />
                    <img src="swiaters.jpg" alt="Image 9" className="w-full h-80 object-cover" />
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Lookbook;
