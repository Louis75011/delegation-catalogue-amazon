import BookCard from '../components/BookCard';
import { catalogue } from '../data';

export default function Catalogue() {
  return (
    <main className="w-full flex-grow flex flex-col items-center py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-3xl md:text-5xl text-navy mb-4">Tous nos livres</h1>
          <div className="w-16 h-[1px] bg-navy mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {catalogue.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}
