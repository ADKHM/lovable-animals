import { useEffect, useState } from "react";
import { fetchPurchases, PurchaseData } from "@/lib/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, RefreshCw, ShieldCheck, DollarSign, User, Phone, PawPrint, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AddAnimalForm from "@/components/admin/AddAnimalForm";

const Admin = () => {
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const loadPurchases = async () => {
    setIsLoading(true);
    try {
      const data = await fetchPurchases();
      setPurchases(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load purchase data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPurchases();
  }, []);

  return (
    <main className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Admin Panel
              </h1>
            </div>
            <p className="text-muted-foreground">
              Manage orders and add new animals to your shop
            </p>
          </div>

          <div className="flex gap-3">
            <AddAnimalForm />
            <Button onClick={loadPurchases} variant="outline" disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <PawPrint className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold text-foreground">{purchases.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">
                  ${purchases.reduce((sum, p) => sum + (Number(p.animalPrice) || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-terracotta/10 rounded-lg">
                <User className="h-6 w-6 text-terracotta" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Unique Buyers</p>
                <p className="text-2xl font-bold text-foreground">
                  {new Set(purchases.map((p) => p.phoneNumber)).size}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl shadow-soft overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
          ) : purchases.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-2">
                        <PawPrint className="h-4 w-4" />
                        Animal
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Price
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">Payment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchases.map((purchase) => (
                    <TableRow key={purchase.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">{purchase.fullName}</TableCell>
                      <TableCell>{purchase.phoneNumber}</TableCell>
                      <TableCell>{purchase.animalName}</TableCell>
                      <TableCell className="font-semibold text-primary">
                        ${Number(purchase.animalPrice).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {purchase.paymentMethod}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-16">
              <PawPrint className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">No purchases yet</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Admin;
