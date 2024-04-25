// components/BookCard.tsx
import React from 'react';

interface BookCardProps {
  book: any;
  title?: string;
  cover: string;
  genre?: string;
  pages?: number;
  year?: number;
  author?: string;
  handleFavorites?: (bookSelected: any) => void;
  isFavorite: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ title, cover, genre, pages, year, author, handleFavorites, book, isFavorite }) => {

  return (
    <div className="justify-center">
    <div className="rounded-lg">
      {cover && (
        <div className="flex items-center justify-center h-60">
          <img
            src={cover}
            alt={title}
            className="w-40 h-60 object-cover rounded-lg"
          />
        </div>
      )}
      <div>
        {title && (
          <h2 className='mt-2 text-lg font-bold text-white'>{title}</h2>
        )}
        {genre && (
          <p className='text-white'>{`Género: ${genre}`}</p>
        )}
        {pages && (
          <p className='text-white'>{`Páginas: ${pages}`}</p>
        )}
        {year && (
          <p className='text-white'>{`Año: ${year}`}</p>
        )}
        {author && (
          <p className='text-white'>{`Autor: ${author}`}</p>
        )}
      </div>
      <div className="mt-4">
        <button onClick={() => { handleFavorites && handleFavorites(book) }}
          className={`ml-auto px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring mb-4 ${
            isFavorite
              ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400'
              : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400'
          }`}
        >
          {isFavorite ? "Eliminar de Lista" : "Agregar a lista"}
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default BookCard;
