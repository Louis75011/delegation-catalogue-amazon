import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';
import { useEffect } from 'react';

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="w-full bg-primary-bg py-8 lg:py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Logo Text */}
        <Link to="/" className="text-center lg:text-left flex items-center group">
          {/* Note RGAA : SVG décoratif représentant l'identité visuelle (Croix classique) */}
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 md:h-12 text-navy mr-4 lg:mr-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-10h12" />
          </svg>
          <div className="flex flex-col items-center lg:items-start">
            <span className="font-serif text-3xl lg:text-4xl font-normal tracking-[0.15em] text-navy uppercase leading-tight group-hover:opacity-80 transition-opacity">
              La Délégation
            </span>
            <span className="font-serif text-3xl lg:text-4xl font-normal tracking-[0.15em] text-navy uppercase leading-tight group-hover:opacity-80 transition-opacity -mt-1 lg:-mt-2">
              Catholique
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav aria-label="Menu principal" className="flex flex-wrap justify-center gap-8 lg:gap-12 text-sm lg:text-base font-sans font-light text-gray-700 uppercase tracking-widest mt-2 lg:mt-0">
          <Link to="/nos-livres" className="hover:text-navy hover:underline underline-offset-8 transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 rounded-sm">Nos livres</Link>
          <Link to="/objectif" className="hover:text-navy hover:underline underline-offset-8 transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 rounded-sm">Notre objectif</Link>
          <Link to="/contact" className="hover:text-navy hover:underline underline-offset-8 transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 rounded-sm">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-navy mt-4 lg:mt-0">
          <button className="hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-navy rounded-sm p-1" aria-label="Accéder au panier">
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
          </button>
          <button className="hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-navy rounded-sm p-1" aria-label="Espace de connexion utilisateur">
            <User className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

