const API_BASE = "https://69205f4131e684d7bfccc336.mockapi.io/react-auth/AnimalsShop";

export interface PurchaseData {
  id?: string;
  fullName: string;
  phoneNumber: string;
  animalName: string;
  animalPrice: number;
  paymentMethod: string;
  createdAt?: string;
}

export const submitPurchase = async (data: Omit<PurchaseData, 'id' | 'createdAt'>): Promise<PurchaseData> => {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit purchase');
  }
  
  return response.json();
};

export const fetchPurchases = async (): Promise<PurchaseData[]> => {
  const response = await fetch(API_BASE);
  
  if (!response.ok) {
    throw new Error('Failed to fetch purchases');
  }
  
  return response.json();
};
