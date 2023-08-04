export interface Project {
  _id: number;
  name: string;
  shortName: string;
  creatures: Creature[];
}

export interface Creature {
  _id: string;
  name: string;
  shortName: string;
  latinName: string;
  type: string;
  category: string;
  subCategory: string;
  species: string;
  occurrence: string;
  properName: string;
  blogImages: string[];
  blogSketches: string[];
  ytLink: string;
  image: string;
  productVariations: ProductVariation[];
  productStatistics: string[];
  rating: number;
  numReviews: number;
  ratings: Record<string, Rating>;
  artPrintImages: string[];
  printOnCanvasImages: string[];
  posterImages: string[];
  premiumPrintImages: string[];
}

export interface ProductVariation {
  name: string;
  shortName: string;
  description: string;
  characteristics: string[];
  variations: Variation[];
}

export interface Variation {
  size: string;
  price: number;
}

export interface Rating {
  rating: number;
  numReviews: number;
}