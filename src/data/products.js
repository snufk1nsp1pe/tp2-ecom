// Static product catalogue for the Virestis store.
//
// This lab intentionally has no backend/database (that comes in a later
// lab), so the "catalogue" lives here as plain JS data. Every product has an
// `icon` + `accent` pair instead of a photo, which the <ProductMark>
// component turns into a little illustrated tile matching the vintage
// store theme. Swap in a real `imageUrl` field later if you want photos.

export const CATEGORIES = ['Plants', 'Socks', 'Accessories'];

export const products = [
  // --- Plants -------------------------------------------------------
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Plants',
    icon: 'leaf',
    accent: 'sage',
    price: 34.99,
    stock: 12,
    description:
      'The swiss-cheese plant everyone pretends they can keep alive. Broad, split leaves and a very forgiving watering schedule.',
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Plants',
    icon: 'sprout',
    accent: 'teal',
    price: 24.5,
    stock: 20,
    description:
      'Nearly indestructible. Thrives on neglect, purifies the air, and judges you silently from the windowsill.',
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    category: 'Plants',
    icon: 'tree',
    accent: 'sage',
    price: 45.0,
    stock: 6,
    description:
      'Dramatic, leafy, and a little needy. The centerpiece plant for people who like a challenge.',
  },
  {
    id: 4,
    name: 'Golden Pothos',
    category: 'Plants',
    icon: 'leaf',
    accent: 'golden',
    price: 18.0,
    originalPrice: 22.0,
    stock: 25,
    description:
      'Trailing vines in variegated green and gold. Grows in a jar of water on a desk if you let it.',
  },
  {
    id: 5,
    name: 'String of Pearls',
    category: 'Plants',
    icon: 'sprout',
    accent: 'lavender',
    price: 21.75,
    stock: 10,
    description:
      'A cascading succulent that looks like a strand of little green beads. Best in a hanging pot.',
  },
  {
    id: 6,
    name: 'Boston Fern',
    category: 'Plants',
    icon: 'fern',
    accent: 'sage',
    price: 19.99,
    stock: 15,
    description:
      'Lush, feathery fronds for the humid corner of the house. Mist it occasionally and it will forgive everything else.',
  },

  // --- Socks ----------------------------------------------------------
  {
    id: 7,
    name: 'Avocado Toast Socks',
    category: 'Socks',
    icon: 'sock',
    accent: 'sage',
    price: 12.0,
    stock: 40,
    description:
      'Breakfast-themed crew socks for people who have strong opinions about brunch.',
  },
  {
    id: 8,
    name: 'Grumpy Cat Crew Socks',
    category: 'Socks',
    icon: 'sock',
    accent: 'coral',
    price: 10.5,
    originalPrice: 14.0,
    stock: 30,
    description:
      'A tiny disapproving cat on each ankle. Accurately represents your Monday mood.',
  },
  {
    id: 9,
    name: 'Tie-Dye Wool Socks',
    category: 'Socks',
    icon: 'sock',
    accent: 'lavender',
    price: 15.0,
    stock: 18,
    description:
      'Hand-dyed wool blend, warm enough for cabin weekends and loud enough to be seen from space.',
  },
  {
    id: 10,
    name: 'Pixel Mushroom Socks',
    category: 'Socks',
    icon: 'sock',
    accent: 'golden',
    price: 11.25,
    stock: 22,
    description:
      '8-bit mushrooms marching around a cotton-blend ankle sock. Peak retro energy.',
  },
  {
    id: 11,
    name: 'Polka Dot Ankle Socks',
    category: 'Socks',
    icon: 'sock',
    accent: 'teal',
    price: 9.0,
    stock: 50,
    description:
      'Simple, cheerful, and always in the laundry. A wardrobe staple with just enough personality.',
  },

  // --- Accessories ------------------------------------------------------
  {
    id: 12,
    name: 'Terracotta Plant Pot',
    category: 'Accessories',
    icon: 'pot',
    accent: 'coral',
    price: 14.0,
    stock: 35,
    description:
      'Classic unglazed clay, breathable for roots, and it only gets more charming as it ages.',
  },
  {
    id: 13,
    name: 'Ceramic Drip Tray',
    category: 'Accessories',
    icon: 'pot',
    accent: 'muted',
    price: 8.5,
    stock: 40,
    description:
      'Saves your windowsill from the inevitable overwatering incident. Fits most small-to-medium pots.',
  },
  {
    id: 14,
    name: 'Brass Watering Can',
    category: 'Accessories',
    icon: 'watering-can',
    accent: 'golden',
    price: 22.0,
    originalPrice: 28.0,
    stock: 9,
    description:
      'A long, narrow spout for precise watering and a finish that looks good enough to leave out on the counter.',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === Number(id)) ?? null;
}
