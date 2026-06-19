import { Book } from './types';

const bookA: Book = {
  id: 'book-a',
  title: 'Le Socialisme : Histoire, Doctrine, Réfutation, Avenir',
  author: 'Abbé Jacques Moulard',
  coverUrl: 'https://i.ibb.co/zHZdzQPJ/lesocialisme.jpg',
  price: '15,00 €',
  pages: 144,
  amazonUrl: 'https://www.amazon.fr/dp/B0H5XF33LM',
  description: 'Cet opuscule adopte un style vivant pour aborder les origines et la doctrine du socialisme, suivi d\'une réfutation précise et d\'une évocation de son avenir.'
};

const bookB: Book = {
  id: 'book-b',
  title: 'Liberté, Autorité, Église : Considérations sur les grands problèmes de notre époque',
  author: 'Mgr Guillaume-Emmanuel de Ketteler',
  coverUrl: 'https://i.ibb.co/Kc9mKYWw/liberteautoriteeglise.jpg',
  price: '24,00 €',
  pages: 296,
  amazonUrl: 'https://www.amazon.fr/LIBERT%C3%89-AUTORIT%C3%89-%C3%89GLISE-Consid%C3%A9rations-probl%C3%A8mes/dp/B0GXPMKTLB',
  description: 'L\'auteur souligne l\'usure des concepts modernistes et affirme que face aux constructions purement humaines, il convient de retourner à la doctrine chrétienne et à la figure de Jésus-Christ.'
};

// Generate 12 books alternating between A and B
export const catalogue: Book[] = Array.from({ length: 12 }, (_, i) => {
  const book = i % 2 === 0 ? bookA : bookB;
  return { ...book, id: `${book.id}-${i}` };
});
