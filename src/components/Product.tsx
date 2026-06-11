interface ProductProps {
  product: {
    src: string;
    alt: string;
    name: string;
    price: string;
  };
}
const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col max-w-100">
      {/* --- Product Image --- */}
      <div className="product__container flex flex-col items-center bg-pink-800/20 p-6 rounded-2xl shadow-sm">
        <img
          src={product.src}
          alt={product.alt}
          className="w-40 h-40 object-contain pointer-events-none"
        />
      </div>
      {/* --- Product Info --- */}
      <div className="flex justify-between items-center">
        <p className="text-xl max-x-1/2 mt-4 font-semibold text-rose-950">
          {product.name}
        </p>
        <p className="mt-4 font-semibold text-rose-700">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
