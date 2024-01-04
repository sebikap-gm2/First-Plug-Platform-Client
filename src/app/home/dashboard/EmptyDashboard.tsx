import { Layout, CustomLink } from "@/common";
import { Card } from "@/components";
import { ShopIcon, AddIcon } from "@/common/Icons";

export default function EmptyDashboard() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 w-full h-full">
        <section className="flex-1 h-full">
            <Card
              Title="My Team"
              titleButton="Add Team Member"
              imageBottom="/girl.svg"
              altImage="My Team"
              icon={<AddIcon />}
              paragraph="You haven't loaded any employees yet."
              className="h-full"
            />
        </section>
        <section className="flex-1 grid grid-cols-2 gap-4">
            <Card
              Title="My Stock"
              titleButton="Shop Now"
              imageBottom="/office.svg"
              altImage="My Stock"
              icon={<ShopIcon />}
              paragraph="You dont't have any items."
              className="h-full"
            />
            <Card
              Title={"Notifications"}
              titleButton="Shop Now"
              imageBottom="/alert.svg"
              altImage="Notifications"
              icon={<ShopIcon />}
              paragraph="You dont't have any orders."
              className="h-full"
            />
        </section>
      </div>
    </Layout>
  )
}
