export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  count: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  weight: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MaterialProduct {
  id: string;
  name: string;
  material: string;
  weight: string;
  description: string;
  image: string;
}

export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  image: string;
}

export interface ToolProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}
