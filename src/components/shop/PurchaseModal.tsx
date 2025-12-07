import { useState } from "react";
import { Animal } from "@/data/animals";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { submitPurchase } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, DollarSign } from "lucide-react";

interface PurchaseModalProps {
  animal: Animal | null;
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal = ({ animal, isOpen, onClose }: PurchaseModalProps) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!animal) return;

    // Validate inputs
    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();

    if (!trimmedName || trimmedName.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (max 100 characters)",
        variant: "destructive",
      });
      return;
    }

    if (!trimmedPhone || !/^[\d\s\-+()]{7,20}$/.test(trimmedPhone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitPurchase({
        fullName: trimmedName,
        phoneNumber: trimmedPhone,
        animalName: animal.name,
        animalPrice: animal.price,
        paymentMethod: "Cash",
      });

      setIsSuccess(true);
      
      setTimeout(() => {
        setFullName("");
        setPhoneNumber("");
        setIsSuccess(false);
        onClose();
      }, 2000);

    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!animal) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="py-8 text-center animate-scale-in">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Purchase Successful!</h3>
            <p className="text-muted-foreground">
              Thank you for your order. We'll contact you soon.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Complete Purchase</DialogTitle>
              <DialogDescription>
                Fill in your details to purchase this animal
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg mb-4">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{animal.name}</h4>
                <p className="text-primary font-bold text-lg">${animal.price.toLocaleString()}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  maxLength={100}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  maxLength={20}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg border-2 border-primary">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="font-medium">Cash Payment Only</span>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Confirm Purchase - $${animal.price.toLocaleString()}`
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
