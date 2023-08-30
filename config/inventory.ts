import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "canvas_tote_bag_1",
    name: "Canvas Tote Bag",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 16800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["brown"],
    currency: "EUR",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "khaki_tote_bag_1",
    name: "Khaki Tote Bag",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 14500,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-3.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["blue"],
    currency: "EUR",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "Air-jordan-1-high-Fearless",
    name: "Air jordan 1 high Fearless - (Taille : 41)",
    description: `Air Jordan 1 Fearless est un coloris inédit célébrant l’intronisation de Michael Jordan au Hall Of Fame en 2009. Le surnom Fearless fait référence au discours de Jordan lors de la cérémonie: «Les limites, tout comme la peur, ne sont souvent qu’une illusion». Un jeu d’asymétrie a été choisi pour cette Air Jordan 1 qui associe les caractéristiques de la UNC et de la mythique Chicago. Un côté brillant est apporté par le cuir verni et par un logo Wings holographique. On retrouve l’inscription “FEAR” sur les semelles intérieures.`,
    price: 35000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/air-jordan-1-high-fearless.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/air-jordan-1-high-fearless.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["brown"],
    currency: "EUR",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "woolblend_suit_belt_1",
    name: "Wool-Blend Suit Belt",
    description: `This handsome belt will pull together any outfit. The strong materials will take on your wear patterns and look even better over time.`,
    price: 35000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["black"],
    currency: "EUR",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "wool_scarf_1",
    name: "Wool Scarf",
    description: `Crafted in the finest English wool from the Abraham Moon mill (established in 1837), this scarf is an elegant and cozy addition to your winter wardrobe.`,
    price: 6199,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-2.jpg",
    ],
    sizes: ["one-size"],
    categories: ["scarves"],
    colors: ["green"],
    currency: "EUR",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "Leather Gloves",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 35000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["brown"],
    currency: "EUR",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "down_mittens_1",
    name: "Down Mittens",
    description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
    price: 35000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["black"],
    currency: "EUR",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "brooks_sunglasses_1",
    name: "Brooks Sunglasses",
    description: `These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
    price: 42000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["yellow"],
    currency: "EUR",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "dock_sunglasses_1",
    name: "Dock Sunglasses",
    description: `Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame, and all at a price that won't break the bank. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.`,
    price: 5599,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["black"],
    currency: "EUR",
  },
]
