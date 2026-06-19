export default function Contact() {
  return (
    <main className="w-full flex-grow flex flex-col items-center py-16 md:py-24 bg-primary-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <h1 className="font-serif text-4xl md:text-5xl text-navy text-center mb-16">
          Contactez-nous
        </h1>

        <div className="bg-white border-[6px] border-navy p-8 md:p-16 lg:p-24 shadow-sm">
          <form className="flex flex-col space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* Top row: First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <label htmlFor="prenom" className="sr-only">Prénom</label>
                <input 
                  type="text" 
                  id="prenom"
                  placeholder="Prénom"
                  className="w-full bg-transparent border-b border-gray-400 py-2 font-sans text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-navy transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="nom" className="sr-only">Nom de famille</label>
                <input 
                  type="text" 
                  id="nom"
                  placeholder="Nom de famille"
                  className="w-full bg-transparent border-b border-gray-400 py-2 font-sans text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-navy transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">E-mail</label>
              <input 
                type="email" 
                id="email"
                placeholder="E-mail"
                className="w-full bg-transparent border-b border-gray-400 py-2 font-sans text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-navy transition-colors"
                required
              />
            </div>

            {/* Message Area */}
            <div className="relative">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message"
                placeholder="Rédigez votre message ici..."
                rows={5}
                className="w-full bg-transparent border-b border-gray-400 py-2 font-sans text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-navy transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button 
                type="submit"
                className="bg-transparent border border-navy text-navy px-16 py-3 font-sans text-sm tracking-widest uppercase hover:bg-navy hover:text-white transition-colors"
              >
                Envoyer
              </button>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}
