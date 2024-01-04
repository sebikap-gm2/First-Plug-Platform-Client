"use client"
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { AddIcon, Layout, ShopIcon } from "@/common";
import { Card, StockCard, TeamHomeCard } from "@/components";

export default observer( function Dashboard() {
  //TODO: REVIEW ==> En esta vista en particular, se necesita la data de members y stock.
  const {members:{members}, products:{products}} = useStore()

  return   <Layout>
  <div className="flex flex-col gap-4 w-full h-full">
    <section className="flex-1 h-full">
        {members.length?
          <Card className="flex-1 h-1/2">
            <TeamHomeCard/>
          </Card>
        : <Card
            Title="My Team"
            titleButton="Add Team Member"
            imageBottom="/girl.svg"
            altImage="My Team"
            icon={<AddIcon />}
            paragraph="You haven't loaded any employees yet."
            className="h-full"
            />
        }
    </section>
    <section className="flex-1 grid grid-cols-2 gap-4">
        {products.length ? 
          <Card
            Title="My Stock"
            titleButton="Shop Now"
            icon={<ShopIcon />}
          >
            <StockCard className="my-4" />
          </Card> 
          :<Card
              Title="My Stock"
              titleButton="Shop Now"
              imageBottom="/office.svg"
              altImage="My Stock"
              icon={<ShopIcon />}
              paragraph="You dont't have any items."
              className="h-full"
            />
          }
         {/* TODO: Cuál es la data de notificaciones? */}
           <Card
              Title="Notifications"
              imageBottom="/alert.svg"
              icon={<ShopIcon />}
              paragraph="You dont't have any orders."
              className="h-full"
            />
    </section>
  </div>
</Layout>
})
