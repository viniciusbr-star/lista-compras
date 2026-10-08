function ItemLista({ texto, comprado, onAlternarComprado, onRemover }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-2">
      
      <span
        onClick={onAlternarComprado}
        className={`cursor-pointer select-none ${
          comprado ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {texto}
      </span>

      <button
        onClick={onRemover}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Remover
      </button>
    </div>
  );
}

export default ItemLista;
