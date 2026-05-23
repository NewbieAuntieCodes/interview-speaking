export type ExpressionItem = string | { term: string; definition?: string };

export type Question = {
  q: string;
  en?: string[];
  keywords?: string[];
  thoughts?: string[];
  expressions?: ExpressionItem[];
  example?: string;
  img?: string;
};

export type Topic = {
  category: string;
  questions: Question[];
};
