"use client";
import { FloatingNav } from "@/app/_components/nav";
import { siteConfig } from "../config/site";
import Sidebar from "./(components)/sideBar";
import { createContext, useEffect, useState } from "react";
import {
  deleteDataFromLocalStorage,
  getDataFromLocalStorage,
} from "../utils/auth";
import { USERDETAILS_API } from "../(api)/user";
import { useRouter } from "next/navigation";
import Spinner from "../(website)/(components)/spinner";

type User = {
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
export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <UserContext.Provider value={user}>
          <section className="bg-[#F2F2F2]">
            <FloatingNav navItems={siteConfig.navItems} />
            <div className="flex">
              <div className="fixed left-5 top-24 h-[85vh] w-[18%] rounded-lg bg-white px-3 shadow-lg">
                <Sidebar />
              </div>
              <div className="ms-auto min-h-[90vh] w-[82%] px-5 pt-10">
                {children}
              </div>
            </div>
          </section>
        </UserContext.Provider>
      )}
    </div>
  );
}
