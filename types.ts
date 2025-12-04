export interface Property {
  id: number;
  price: string;
  title: string;
  location: string;
  beds: string;
  baths: string;
  sqft: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PropertyType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  author: string;
}

export interface Insight {
  id: number;
  title: string;
  description: string;
  buttonText: string;
}