"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useEffect, useState } from "react";
import { TeamMember } from "@/types";
import { observer } from "mobx-react-lite";
import ProductDetail from "@/common/ProductDetail";

export const AssignProduct = observer(() => {
  const {
    members: { members },
    products: { currentProduct, getProductForAssign },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!currentProduct || !currentProduct._id) return;
      setLoading(true);
      setError(null);
      try {
        await getProductForAssign(currentProduct._id);
      } catch (err) {
        console.error("Failed to get product for assign", err);
        setError("Failed to load product data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [getProductForAssign, currentProduct]);

  useEffect(() => {
    if (members.length > 0 && currentProduct) {
      if (
        currentProduct.assignedEmail === "" &&
        currentProduct.assignedMember === ""
      ) {
        setFilteredMembers(members);
      }
    }
  }, [members, currentProduct]);

  const handleSelectedMembers = (selectedMember: TeamMember | null) => {
    setMember(selectedMember);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* <ProductDetail product={currentProduct} /> */}
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <AddMemberForm
          selectedMember={member}
          handleSelectedMembers={handleSelectedMembers}
          members={filteredMembers}
          currentProduct={currentProduct}
        />
      )}
    </div>
  );
});
