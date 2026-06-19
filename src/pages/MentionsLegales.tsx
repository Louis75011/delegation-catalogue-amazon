export default function MentionsLegales() {
  return (
    <main className="w-full flex-grow flex flex-col items-center py-16 md:py-24 bg-primary-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full font-sans text-gray-800 text-sm md:text-base leading-relaxed">
        
        <h1 className="font-serif text-3xl md:text-4xl text-navy text-center mb-16">
          Mentions Légales
        </h1>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <section className="mb-8">
            <h2 className="font-serif text-xl text-navy mb-4">Éditeur du site</h2>
            <p>
              <strong>Nom de la structure :</strong> Éditions LDC (La Délégation Catholique)<br />
              <strong>Directeur de la publication :</strong> Louis Rouanet<br />
              <strong>Email de contact :</strong> contact@ladelegationcatholique.fr<br />
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl text-navy mb-4">Hébergement</h2>
            <p>
              Le site est hébergé par Google Cloud Run (Google AI Studio).<br />
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl text-navy mb-4">Ouvrages et Publication</h2>
            <p className="font-semibold text-navy">
              Les ouvrages présentés sont publiés sous le label "Independently published" via le service Amazon KDP (Kindle Direct Publishing). L'impression, la vente et l'expédition sont assurées directement par Amazon.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-xl text-navy mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur un support quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-navy mb-4">Accessibilité (RGAA)</h2>
            <p>
              La Délégation Catholique s'engage à rendre son site internet accessible conformément à l'article 47 de la loi n°2005-102 du 11 février 2005. À ce stade de développement, une évaluation de conformité au RGAA (Référentiel Général d'Amélioration de l'Accessibilité) est en cours de structuration.
              <br /><br />
              Des efforts continus sont apportés pour assurer une perception aisée (contraste renforcé), une navigation clavier robuste et un balisage sémantique rigoureux.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
