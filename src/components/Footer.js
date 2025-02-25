import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-8 py-6 text-gray-400 text-center md:text-left">
            <p className="text-sm order-2 md:order-1">© 2020 Factory - All Rights Reserved.</p>

            <div className="flex justify-center md:justify-center gap-4 order-1 md:order-2 my-4 md:my-0">
                <a href="https://facebook.com" target="_blank" 
                   className="bg-white p-3 md:p-2 rounded-full shadow-md">
                    <Facebook className="w-6 h-6 md:w-5 md:h-5 text-black" />
                </a>
                <a href="https://twitter.com" target="_blank" 
                   className="bg-white p-3 md:p-2 rounded-full shadow-md">
                    <Twitter className="w-6 h-6 md:w-5 md:h-5 text-black" />
                </a>
                <a href="https://instagram.com" target="_blank" 
                   className="bg-white p-3 md:p-2 rounded-full shadow-md">
                    <Instagram className="w-6 h-6 md:w-5 md:h-5 text-black" />
                </a>
            </div>

            <p className="text-sm text-center md:text-right order-3">
                Powered by <span className="font-semibold">GoDaddy</span>
            </p>
        </footer>
    );
}
