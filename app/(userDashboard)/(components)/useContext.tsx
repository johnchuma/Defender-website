"use client"; // Because you're using state and effects

import { createContext, useState, useEffect } from "react";
import { USERDETAILS_API } from "../../(api)/user";
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from "../../utils/auth";
import { useRouter } from "next/navigation";

export type User = {
  id: number;
  uuid: string;
  name: string;
  recoveryCode: string | null;
  role: "client" | "admin" | "other";
  email: string;
  phone: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getDataFromLocalStorage("defender_userToken");
    if (token) {
      setIsLoading(true);
      USERDETAILS_API(token).then((response) => {
        if (!response.status) {
          console.error("Failed to fetch user details");
          setIsLoading(false);
          return;
        } else {
          setUser(response.data.body);
          setIsLoading(false);
        }
      });
    } else {
      deleteDataFromLocalStorage("defender_userToken");
      router.push("/login");
      setIsLoading(false);
    }
  }, [router]);

  return (
    <UserContext.Provider value={user}>
      {isLoading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
};
