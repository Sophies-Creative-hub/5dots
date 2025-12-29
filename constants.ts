
import { Artist } from './types';

export interface ExtendedArtist extends Artist {
  portfolio: string[];
}

export const ARTISTS: ExtendedArtist[] = [
  {
    id: 'Cora',
    name: 'Cora',
    handle: '@cora.tattoo',
    description: 'Spezialistin für filigrane Botanik und feine Linien. Ihre Arbeiten zeichnen sich durch eine poetische Leichtigkeit aus.',
    imageUrl: 'https://picsum.photos/seed/distel/800/1000',
    portfolio: [
      'https://picsum.photos/seed/flower1/800/800',
      'https://picsum.photos/seed/flower2/800/800',
      'https://picsum.photos/seed/leaf1/800/800'
    ]
  },
  {
    id: 'laila',
    name: 'Laila',
    handle: '@lailarosetattoo',
    description: 'Klassisches Handwerk trifft auf moderne Farbakzente. Laila liebt kontrastreiche Motive mit starker Symbolik.',
    imageUrl: 'https://picsum.photos/seed/lisarose/800/1000',
    portfolio: [
      'https://picsum.photos/seed/trad1/800/800',
      'https://picsum.photos/seed/trad2/800/800',
      'https://picsum.photos/seed/trad3/800/800'
    ]
  },
  {
    id: 'julie',
    name: 'Julie',
    handle: '@julie.von.adlerwald',
    description: 'Abstrakte Konzepte und fließende Wasserfarben-Optik. Jedes Tattoo ist ein Unikat, das die Anatomie unterstreicht.',
    imageUrl: 'https://picsum.photos/seed/rabenweiss/800/1000',
    portfolio: [
      'https://picsum.photos/seed/abs1/800/800',
      'https://picsum.photos/seed/abs2/800/800',
      'https://picsum.photos/seed/abs3/800/800'
    ]
  }
];

export const CONTACT_INFO = {
  address: 'Weißer Wall 97, 40217 Düsseldorf',
  email: '5dots.tattoo@email.com',
  instagram: '@5dots.tattoo',
  phone: '+49123456789',
  whatsapp: '+49123456789'
};
