import { useParams, Navigate } from 'react-router-dom';
import { catalogue } from '../data';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const book = catalogue.find(b => b.id === id);

  if (!book) {
    return <Navigate to="/nos-livres" replace />;
  }

  return (
    <main className="w-full flex-grow flex flex-col items-center py-12 md:py-20 lg:py-28 bg-primary-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col pt-4 md:pt-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-4 text-balance">
            {book.title}
          </h1>
          <h2 className="font-serif text-xl sm:text-2xl text-gray-700 mb-8 italic">
            par {book.author}
          </h2>
          
          <div className="space-y-6 text-gray-800 font-sans text-sm md:text-base leading-relaxed text-justify">
            <p>
              {book.analysis}
            </p>
            <p>
              {book.biography}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-10 mb-10 text-gray-500 font-sans text-sm uppercase tracking-widest">
            <span>{book.pages} pages</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span>{book.price}</span>
          </div>

          <div>
            <a 
              href={book.amazonUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white px-10 py-4 font-sans text-sm sm:text-base uppercase tracking-widest hover:bg-navy-dark transition-colors shadow-sm"
            >
              Acheter sur Amazon
            </a>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="w-full md:w-1/2 flex justify-center md:sticky md:top-24 mt-8 md:mt-0">
          <div className="w-full max-w-sm lg:max-w-md bg-gray-200/50 p-8 sm:p-12 lg:p-16 flex items-center justify-center relative shadow-inner">
            <img 
              src={book.coverUrl} 
              alt={`Couverture de ${book.title}`} 
              className="max-w-full h-auto object-cover shadow-2xl z-10"
              style={{ aspectRatio: '2/3' }}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
