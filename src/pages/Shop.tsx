import { useState } from "react";
import { animals, Animal } from "@/data/animals";
import AnimalCard from "@/components/shop/AnimalCard";
import PurchaseModal from "@/components/shop/PurchaseModal";
import { Store, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Shop = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(animals.map((a) => a.category))];

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || animal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuy = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <Store className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Find Your Perfect Pet</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Our Animals
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Browse our collection of wonderful animals waiting for a loving home
          </p>

          {/* Search and Filters */}
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search animals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animals Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredAnimals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAnimals.map((animal, index) => (
                <AnimalCard
                  key={animal.id}
                  animal={animal}
                  index={index}
                  onBuy={handleBuy}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No animals found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <PurchaseModal
        animal={selectedAnimal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default Shop;
