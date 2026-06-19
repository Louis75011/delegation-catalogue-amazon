import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { catalogue } from '../data';

export default function Home() {
  const displayedBooks = catalogue.slice(0, 8);

  return (
    <main className="w-full flex-grow flex flex-col items-center py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-3xl md:text-5xl text-navy mb-4">Notre Catalogue</h1>
          <div className="w-16 h-[1px] bg-navy mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        {/* Bottom Button */}
        <div className="mt-20 flex justify-center">
          <Link to="/nos-livres" className="bg-navy text-white px-10 py-3 font-sans text-sm tracking-widest uppercase hover:bg-navy-dark transition-colors focus:outline-none focus:ring-4 focus:ring-navy/50">
            Tous nos livres
          </Link>
        </div>
      </div>
    </main>
  );
}
