export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  tagline?: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  tag: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SpecItem {
  name: string;
  value: string;
}
