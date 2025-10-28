import HomeClient from "./homeClient/page";

// app/page.tsx
export const revalidate = 60; // Regenerate every 60 seconds


interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  inventory: string;
  slug: string;
}

//  Server-side ISR fetching
async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/allProducts`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.products || [];
}

export default async function HomePage() {
  const products = await getProducts();

  return <HomeClient products={products} />;
}
