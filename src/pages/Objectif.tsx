export default function Objectif() {
  return (
    <main className="w-full flex-grow flex flex-col items-center py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <h1 className="font-serif text-4xl md:text-5xl text-navy text-center mb-16 md:mb-24">
          Notre objectif
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-center relative max-w-5xl mx-auto">
          {/* Left: Image */}
          <div className="w-full lg:w-[55%] z-10 flex">
            <img 
              src="https://i.ibb.co/Mxbygqqp/image.png" 
              alt="Buste classique illustrant la démarche de résistance intellectuelle de la Délégation Catholique" 
              className="w-full h-full object-cover bg-gray-200 shadow-lg"
              style={{ minHeight: '300px' }}
            />
          </div>

          {/* Right: Text Block */}
          {/* On large screens, it overlaps slightly over the image. */}
          <div className="w-full lg:w-[55%] lg:-ml-[10%] mt-8 lg:mt-16 z-20 flex items-center">
            {/* Note RGAA : Contraste valide entre le texte blanc et le fond bleu marine foncé #0F3057 */}
            <div className="bg-navy p-6 md:p-10 shadow-xl w-full">
              <div className="bg-white p-8 md:p-12 h-full flex flex-col justify-center">
                <p className="font-sans text-gray-800 leading-relaxed text-sm md:text-base text-justify">
                  L'objectif de La Délégation Catholique est de mettre ou de remettre à la disposition des Français un certain nombre de textes fondamentaux issus du clergé — prêtres, évêques, et grands penseurs catholiques.
                  <br /><br />
                  Face au délitement de la pensée et à la perte des repères traditionnels, notre démarche est d'opposer une résistance intellectuelle et spirituelle par l'étude de la doctrine chrétienne.
                  <br /><br />
                  Il s'agit de constituer une bibliothèque de référence capable d'éclairer les consciences, de réfuter les constructions purement humaines, et d'offrir une véritable renaissance appuyée sur l'héritage pérenne de l'Église.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
