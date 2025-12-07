export interface Animal {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const animals: Animal[] = [
  {
    id: "1",
    name: "Golden Retriever Puppy",
    price: 1200,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
    category: "Dogs",
    description: "Friendly and devoted family companion"
  },
  {
    id: "2",
    name: "Persian Cat",
    price: 800,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
    category: "Cats",
    description: "Gentle and calm with luxurious coat"
  },
  {
    id: "3",
    name: "Holland Lop Rabbit",
    price: 150,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop",
    category: "Small Pets",
    description: "Adorable floppy-eared bunny"
  },
  {
    id: "4",
    name: "Blue Macaw Parrot",
    price: 2500,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=400&fit=crop",
    category: "Birds",
    description: "Stunning intelligent tropical bird"
  },
  {
    id: "5",
    name: "German Shepherd",
    price: 1500,
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop",
    category: "Dogs",
    description: "Loyal and courageous working dog"
  },
  {
    id: "6",
    name: "Bengal Cat",
    price: 1800,
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=600&h=400&fit=crop",
    category: "Cats",
    description: "Wild-looking with leopard spots"
  },
  {
    id: "7",
    name: "Cockatiel",
    price: 200,
    image: "https://images.unsplash.com/photo-1591198936750-16d8e15edc57?w=600&h=400&fit=crop",
    category: "Birds",
    description: "Friendly whistling companion"
  },
  {
    id: "8",
    name: "Syrian Hamster",
    price: 25,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop",
    category: "Small Pets",
    description: "Cute and cuddly pocket pet"
  }
];
