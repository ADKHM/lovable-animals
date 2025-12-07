import { Animal } from "@/data/animals";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
  index: number;
  onBuy: (animal: Animal) => void;
}

const AnimalCard = ({ animal, index, onBuy }: AnimalCardProps) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-lg">
            ${animal.price.toLocaleString()}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {animal.category}
        </span>
        <h3 className="font-display text-lg font-semibold mt-1 mb-1 text-card-foreground">
          {animal.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {animal.description}
        </p>

        <Button 
          onClick={() => onBuy(animal)} 
          variant="hero"
          className="w-full"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default AnimalCard;
