import { LookItem } from "./LookItem";

export const FactoryLooks = () => {
    const looks = [
        { id: 1, title: "Graphite Beanie", image: "/men.avif", className: "w-full h-[660px]" },
        { id: 2, title: "Oversized Wool", image: "/wool.webp", className: "w-full h-[320px]" },
        { id: 3, title: "Heavy Jacket", image: "/heavyJacket.jpg", className: "w-full h-[320px]" },
        { id: 4, title: "Relaxed Trousers", image: "/relaxedTrousers.jpg", className: "w-full h-[500px]" },
        { id: 5, title: "Striped Socks", image: "/socks.jpg", className: "w-full h-[500px]" },
        { id: 6, title: "Energy Tee", image: "/tea.avif", className: "w-full h-[500px]" },
        { id: 7, title: "Walker Jacket", image: "/walkerJacket.webp",  },
    ];

    return (
        <section className="bg-[#161616] py-12 text-center">
            <h2 className="text-[#636363] opacity-45 font-bold text-4xl mb-10">#FACTORYLOOKS</h2>

            {/* Верхній ряд */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
                <LookItem {...looks[0]} />
                <div className="flex flex-col gap-5">
                    <LookItem {...looks[1]} />
                    <LookItem {...looks[2]} />
                </div>
            </div>

            {/* Нижній ряд */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto mt-5">
                {looks.slice(3).map((look) => (
                    <LookItem key={look.id} {...look} />
                ))}
            </div>
        </section>
    );
};
