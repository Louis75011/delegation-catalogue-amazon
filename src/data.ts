import { Book } from './types';

const bookA: Book = {
  id: 'socialisme-moulard',
  title: 'Le Socialisme : Histoire, Doctrine, Réfutation, Avenir',
  author: 'Abbé Jacques Moulard',
  coverUrl: 'https://i.ibb.co/zHZdzQPJ/lesocialisme.jpg',
  price: '15,00 €',
  pages: 144,
  amazonUrl: 'https://www.amazon.fr/dp/B0H5XF33LM',
  description: 'Cet opuscule adopte un style vivant pour aborder les origines et la doctrine du socialisme.',
  analysis: "Cet opuscule adopte une démarche structurée en trois temps. Une étude historique des origines du mouvement. Une réfutation doctrinale, véritable contre-argumentaire théologique face aux théories socialistes. Une réflexion prospective sur l'évolution de cette idéologie.",
  biography: "L'abbé Jacques Moulard est un ecclésiastique et docteur en théologie du XXe siècle. Il s'est distingué par ses travaux d'histoire religieuse. Son œuvre s'attache à défendre la doctrine sociale de l'Église face aux matérialismes contemporains."
};

const bookB: Book = {
  id: 'liberte-eglise-ketteler',
  title: 'Liberté, Autorité, Église : Considérations sur les grands problèmes de notre époque',
  author: 'Mgr Guillaume-Emmanuel de Ketteler',
  coverUrl: 'https://i.ibb.co/Kc9mKYWw/liberteautoriteeglise.jpg',
  price: '24,00 €',
  pages: 296,
  amazonUrl: 'https://www.amazon.fr/LIBERT%C3%89-AUTORIT%C3%89-%C3%89GLISE-Consid%C3%A9rations-probl%C3%A8mes/dp/B0GXPMKTLB',
  description: "L'auteur souligne l'usure des concepts modernistes et affirme qu'il convient de retourner à la doctrine chrétienne.",
  analysis: "L'ouvrage constitue une critique de la modernité à travers le prisme du catholicisme traditionnel. L'auteur examine la métamorphose des concepts cardinaux (progrès, liberté, égalité) et affirme qu'il convient de restaurer leur usage rectifié. L'unique alternative viable réside dans la souveraineté du Christ.",
  biography: "Mgr Wilhelm Emmanuel von Ketteler (1811–1877) fut évêque de Mayence. Figure de proue du catholicisme social européen, son action a profondément influencé le pape Léon XIII. Il s'est opposé de manière constante au libéralisme économique et au socialisme matérialiste."
};

// Generate 12 books alternating between A and B
export const catalogue: Book[] = Array.from({ length: 12 }, (_, i) => {
  const book = i % 2 === 0 ? bookA : bookB;
  return { ...book, id: `${book.id}-${i}` };
});
