import { PawPrint, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-display font-bold mb-4">
              <PawPrint className="h-6 w-6 text-primary" />
              <span>PetHaven</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your trusted destination for finding the perfect animal companion. We connect loving families with their future pets.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Shop Animals
                </Link>
              </li>
              <li>
                Admin 
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@pethaven.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Open: Mon-Sat 9AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-terracotta fill-terracotta" /> for animal lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
