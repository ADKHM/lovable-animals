export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Choosing the Perfect Pet for Your Family",
    excerpt: "Finding the right companion animal depends on your lifestyle, living space, and family dynamics. Learn how to make the best choice.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=500&fit=crop",
    author: "Dr. Sarah Mitchell",
    date: "December 5, 2025",
    category: "Pet Care"
  },
  {
    id: "2",
    title: "Essential Nutrition Tips for Dogs",
    excerpt: "A balanced diet is crucial for your dog's health. Discover the key nutrients every dog needs and how to provide them.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=500&fit=crop",
    author: "James Wilson",
    date: "December 3, 2025",
    category: "Dog Care"
  },
  {
    id: "3",
    title: "Understanding Cat Behavior: A Complete Guide",
    excerpt: "Cats communicate through body language and vocalizations. Learn to decode your feline friend's signals.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=500&fit=crop",
    author: "Emily Chen",
    date: "December 1, 2025",
    category: "Cat Care"
  },
  {
    id: "4",
    title: "Creating the Perfect Habitat for Small Pets",
    excerpt: "From hamsters to rabbits, small pets need special environments. Here's how to set up their ideal home.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1535241749838-299f6dd40d9a?w=800&h=500&fit=crop",
    author: "Michael Torres",
    date: "November 28, 2025",
    category: "Small Pets"
  },
  {
    id: "5",
    title: "Bird Training 101: Teaching Your Parrot to Talk",
    excerpt: "Parrots are incredible mimics. With patience and the right techniques, you can teach them to speak.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=800&h=500&fit=crop",
    author: "Lisa Park",
    date: "November 25, 2025",
    category: "Birds"
  },
  {
    id: "6",
    title: "The Benefits of Pet Adoption",
    excerpt: "Adopting a pet saves lives and brings joy. Discover why adoption is a wonderful choice for finding your new companion.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=500&fit=crop",
    author: "Dr. Sarah Mitchell",
    date: "November 22, 2025",
    category: "Adoption"
  }
];
