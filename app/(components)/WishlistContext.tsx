// WishlistContext.tsx
"use client"
import { createContext, useContext, useState, useEffect } from "react";

interface WishlistContextType {
  wishlistCount: number;
  setWishlistCount: (count: number) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlistCount: 0,
  setWishlistCount: () => {},
});

// Custom hook to use the context
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlistCount, setWishlistCount] = useState(0);

  const computeUniqueWishlistCount = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const uniqueWishlistItems = new Set(savedCart.map((item: { id: number }) => item.id));
    setWishlistCount(uniqueWishlistItems.size);
  };

  useEffect(() => {
    computeUniqueWishlistCount(); // Initial load

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        computeUniqueWishlistCount();
      }
    };

    const handleCartUpdate = () => {
      computeUniqueWishlistCount();
    };

    window.addEventListener("storage", handleStorageChange);
    document.addEventListener("cartUpdate", handleCartUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      document.removeEventListener("cartUpdate", handleCartUpdate);
    };
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistCount, setWishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};
