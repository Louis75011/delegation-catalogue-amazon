import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Legal Info */}
        <div className="flex flex-col space-y-3 font-sans text-sm md:text-base font-light text-gray-200">
          <h3 className="font-serif text-xl mb-2 text-white">Éditions LDC</h3>
          <p>contact@ladelegationcatholique.fr</p>
          <p>&copy; 2026 La Délégation Catholique</p>
          <Link to="/mentions-legales" className="underline underline-offset-4 hover:text-white transition-colors w-fit mt-2">
            Mentions légales
          </Link>
        </div>

        {/* Right Section: Newsletter */}
        <div className="flex flex-col md:items-end">
          <div className="w-full md:w-auto max-w-md">
            <h3 className="font-serif text-lg md:text-xl mb-4 text-white text-center md:text-left">
              Soyez les premiers informés des nouvelles sorties
            </h3>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Adresse e-mail</label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Saisissez votre adresse e-mail*"
                className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white focus:border-white font-sans text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-transparent border border-white text-white py-3 uppercase tracking-wider font-sans text-sm hover:bg-white hover:text-navy transition-colors"
              >
                Je m'inscris
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Return to top minimal indicator */}
      <div className="w-full py-4 flex justify-center border-t border-navy-dark">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Retour en haut"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
