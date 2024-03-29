"use client";
import { ReactNode, useEffect } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { Memberservices, ProductServices } from "@/services";
import { Layout } from "@/common";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();

  const {
    user: { setUser },
    members: { setMembers },
    products: { setProducts },
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
        ProductServices.getAllProducts().then((res) => {
          setProducts(res);
        });
      }
    }
  }, [session]);

  if (!store) return null;
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <aside className="flex flex-col flex-grow  max-h-[100vh] pb-2 ">
        <Navbar />
        <Layout>{children}</Layout>
      </aside>
      <Aside />
    </div>
  );
});
