// export interface CardProps {
//     name: string;
// }

// export interface ButtonProps {
//     label: string;
//     onClick: () => void;
// }

// export interface LayoutProps {
//   children: React.ReactNode;
// }

// export interface PropertyProps {
//   name: string;
//   address: {
//     state: string;
//     city: string;
//     country: string;
//   };
//   rating: number;
//   category: string[];
//   price: number;
//   offers: {
//     bed: string;
//     shower: string;
//     occupants: string;
//   };
//   image: string;
//   discount: string;
// }

// export interface CategoryIconProps {
//   icon: string;
//   label: string;
//   active?: boolean;
//   onClick?: () => void;
// }

// export interface PillProps {
//   label: string;
//   onClick?: (label: string) => void;
//   active?: boolean;
//   className?: string;
// }

// Updated Interface From "Property Detail" project
export interface CardProps {
  name: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  description?: string;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  images: string[];
  discount: string;
  reviews: Review[];
}

export interface CategoryIconProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface PillProps {
  label: string;
  onClick?: (label: string) => void;
  active?: boolean;
  className?: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}
