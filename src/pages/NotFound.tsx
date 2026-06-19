import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="w-full flex-grow flex flex-col items-center justify-center py-20 px-4 bg-primary-bg">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-navy mb-6">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-8">Page introuvable</h2>
        <p className="font-sans text-gray-600 mb-12">
          La page que vous recherchez semble avoir été déplacée ou n'existe plus. 
          Nous vous invitons à retourner à la page d'accueil pour explorer notre catalogue.
        </p>
        <Link 
          to="/"
          className="inline-block bg-navy text-white px-8 md:px-10 py-3 md:py-4 font-sans text-sm uppercase tracking-widest hover:bg-navy-dark focus:outline-none focus:ring-4 focus:ring-navy/50 transition-all shadow-sm"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
