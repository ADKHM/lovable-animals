// API URL
const API_BASE = "https://69205f4131e684d7bfccc336.mockapi.io/react-auth/AnimalsShop";

// Oddiy POST funksiyasi
export async function submitPurchase(data: {
  fullName: string;
  phoneNumber: string;
  animalName: string;
  animalPrice: number;
  paymentMethod: string;
}) {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to submit");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Oddiy GET funksiyasi
export async function fetchPurchases() {
  try {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
