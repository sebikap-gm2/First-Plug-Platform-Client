"use client";
import { Table } from "@/components";
import { Layout, Button } from "@/common";
import { ShopIcon, UpLoadIcon } from "@/common/Icons";
import { useRouter } from "next/navigation";

export default function DataStock() {
  const router = useRouter();

  return (
    <Layout className="flex flex-col gap-5 overflow-auto pb-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label className="ml-2 text-gray-500">
            Show only avaliable stock
          </label>
        </div>

        <div className="flex  gap-5 mr-3">
          <div>
            <Button
              variant="secondary"
              body="Load Stock"
              icon={<UpLoadIcon />}
              className="p-3 rounded-md"
            />
          </div>
          <div>
            <Button
              variant="primary"
              icon={<ShopIcon />}
              body="Shop Now"
              className="p-3 rounded-md"
              onClick={() => {
                router.push("/shop");
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Table />
      </div>
    </Layout>
  );
}
