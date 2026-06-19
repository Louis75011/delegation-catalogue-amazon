import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col items-center group">
      {/* Cover Image Container */}
      <Link 
        to={`/livre/${book.id}`}
        className="block w-full overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-navy/50"
      >
        <img 
          src={book.coverUrl} 
          alt={`Consulter la page détaillée du livre : ${book.title}`} 
          className="w-full object-cover aspect-[2/3] transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
      </Link>
      
      {/* Details */}
      <div className="flex flex-col items-center text-center px-2 space-y-2 w-full">
        {/* Note RGAA : Le contraste du texte gris-500 sur blanc est acceptable pour des métadonnées, mais les éléments clés (titre, prix) utilisent le bleu marine foncé. */}
        <span className="font-sans text-xs tracking-widest text-gray-500 uppercase">
          {book.author}
        </span>
        <h3 className="font-serif text-lg md:text-xl text-navy leading-snug line-clamp-2 px-1">
          {book.title}
        </h3>
        <p className="font-sans text-sm text-gray-500 mt-2 line-clamp-3 px-4">
          {book.description}
        </p>
        <span className="font-sans font-medium text-navy mt-4 inline-block">
          {book.price}
        </span>
        
        <Link 
          to={`/livre/${book.id}`}
          className="mt-6 inline-block border border-navy text-navy px-8 py-2 font-sans text-sm uppercase tracking-wider hover:bg-navy hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
        >
          Découvrir
        </Link>
      </div>
    </div>
  );
}
