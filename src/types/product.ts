export type ProductStatus = "Active" | "Draft";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  status: ProductStatus;
}
