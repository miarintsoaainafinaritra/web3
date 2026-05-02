"use client";

import { useState, useEffect, createContext, useContext } from "react";

type Theme = "light" | "dark";

interface Product {
  id: number;
  nom: string;
  description: string;
  prix: number;
  categorie: "smartphone" | "laptop" | "tv";
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    nom: "iPhone 15 Pro",
    description: "Smartphone haut de gamme avec puce A17 Pro",
    prix: 1199,
    categorie: "smartphone",
    image: "/images/iphone15pro.jpg"
  },
  {
    id: 2,
    nom: "Samsung Galaxy S24",
    description: "Smartphone Android avec IA intégrée",
    prix: 999,
    categorie: "smartphone",
    image: "/images/galaxys24.jpg"
  },
  {
    id: 3,
    nom: "MacBook Pro 14",
    description: "Ordinateur portable professionnel avec puce M3",
    prix: 1999,
    categorie: "laptop",
    image: "/images/macbookpro14.jpg"
  },
  {
    id: 4,
    nom: "Dell XPS 15",
    description: "Ultrabook premium avec écran OLED",
    prix: 1499,
    categorie: "laptop",
    image: "/images/dellxps15.jpg"
  },
  {
    id: 5,
    nom: "LG OLED C4",
    description: "TV OLED 4K avec qualité d'image exceptionnelle",
    prix: 2499,
    categorie: "tv",
    image: "/images/lgoledc4.jpg"
  },
  {
    id: 6,
    nom: "Samsung Neo QLED",
    description: "TV QLED 8K avec Mini LED",
    prix: 2999,
    categorie: "tv",
    image: "/images/samsungneoqled.jpg"
  }
];

interface CartItem {
  id: number;
  nom: string;
  description: string;
  prix: number;
  categorie: "smartphone" | "laptop" | "tv";
  image: string;
  quantity: number;
}

interface CartContextType {
  theme: Theme;
  toggleTheme: () => void;
  cart: CartItem[];
  cartCount: number;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const AppContext = createContext<CartContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedCart = localStorage.getItem("cart");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const addToCart = (productId: number) => {
    const existingItem = cart.find((item) => item.id === productId);
    let newCart;

    if (existingItem) {
      newCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      const product = products.find((p) => p.id === productId);
      if (product) {
        newCart = [...cart, { ...product, quantity: 1 }];
      } else {
        return;
      }
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        cart, 
        cartCount, 
        addToCart, 
        removeFromCart, 
        clearCart,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
