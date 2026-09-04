export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200">
      <img src={product.image} alt={product.title} className="w-full aspect-square object-cover" loading="lazy" />
      <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
      <p className="mt-1">${product.price.toFixed(2)}</p>
      <p>{"★".repeat(product.rating)}</p>
      <span className="text-xs px-2 py-1 bg-yellow-400 rounded">{product.tag}</span>
      <Button variant="solid">Adicionar</Button>
    </div>
  );
}