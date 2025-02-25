
function ProductItem({ handleClickOnProduct, id, image, title, price }) {
    return (
        <div onClick={() => handleClickOnProduct(id)} className="p-4 text-white text-left cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[16rem] w-full max-w-full overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold mt-2 truncate">{title}</h3>
            <p className="text-sm sm:text-xs md:text-sm lg:text-base">{price}$</p>
        </div>
    );
}

export default ProductItem;
