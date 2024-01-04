"use client";
import { Button, Layout, CustomLink, EmptyCard } from "@/common";
import { ShopIcon, UpLoadIcon } from "@/common/Icons";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models"
export default observer ( function EmptyStock() {
    const {
        aside: { setAside },
      } = useStore();
    
      return (
        <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
          <EmptyCard
            imageBottom="/office.svg"
            paragraph="You don't have any items."
            altImage="Office"
          >
            <div className="flex gap-2 ">
              <Button
                variant="secondary"
                body="Load Stock"
                size="big"
                icon={<UpLoadIcon />}
                className="p-3 rounded-md"
                onClick={() => {
                  setAside("LoadStock");
                }}
              />
    
              <CustomLink
                variant="primary"
                size="big"
                className="rounded-md flex   gap-2"
                href="/shop"
              >
                <ShopIcon /> Shop Now
              </CustomLink>
            </div>
          </EmptyCard>
        </Layout>)
})
