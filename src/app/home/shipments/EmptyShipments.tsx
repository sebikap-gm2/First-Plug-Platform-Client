import { Layout, EmptyCard, CustomLink } from "@/common";

export default function EmptyShipments() {
  return (
    <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
    <EmptyCard
      imageBottom="/world.svg"
      paragraph="You haven't made any shipment yet."
      altImage="World"
    >
      <CustomLink
        variant="primary"
        size="big"
        className="rounded-md flex justify-center"
        href="/home/my-stock"
      >
        Got to My Stock
      </CustomLink>
    </EmptyCard>
  </Layout>
  )
}
