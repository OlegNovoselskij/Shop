export const LookItem = ({ image, title, className }) => {
    return (
      <div className={`relative overflow-hidden group transition-transform duration-300 ${className}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-130" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10">
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>
    );
  };
  