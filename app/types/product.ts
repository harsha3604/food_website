// types/product.ts

export type DescriptionSection =
  | {
      type: "paragraph";
      title?: string;
      content: string;
    }
  | {
      type: "list";
      title?: string;
      items: string[];
    };

export type Product = {
  id: number;
  name: string;
  unit: string;
  price: number;
  image: string;
  soldOut: boolean;
  description: DescriptionSection[];
};
