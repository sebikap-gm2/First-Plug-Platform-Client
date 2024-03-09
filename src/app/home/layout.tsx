"use client";
import { ReactNode, useEffect } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { LoggedInUser } from "@/types";
import {
  Memberservices,
  OrderServices,
  ProductServices,
  ShipmentServices,
  TeamServices,
} from "@/services";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();

  const {
    user: { setUser },
  } = store;

  const session = useSession();

  useEffect(() => {
    if (session.data) {
      sessionStorage.setItem(
        "accessToken",
        session.data.backendTokens.accessToken
      );

      setUser({
        _id: session.data.user._id,
        name: session.data.user.name,
        image: session.data.user.image,
        email: session.data.user.email,
      });

      if (sessionStorage.getItem("accessToken")) {
        Memberservices.getAllMembers().then((res) => {
          store.members.setMembers(res);
        });

        ProductServices.getAllProducts().then((res) => {
          store.products.setProducts(res);
        });
      }
    }
  }, [session]);

  if (!store) return null;
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {children}
        <Aside />
      </div>
    </div>
  );
});
