"use client";
import { BillingForm, Card, CompanyForm, AccessForm } from "@/components";
import { Layout, Button } from "@/common";
import { VisaIcon } from "@/common/Icons";
import { useCallback, useState } from "react";
import { CreationTeamMember } from "@/types";
export default function Settings() {
  //TODO: CONSULTAR QUE ES LO QUE SE COMPELTA EN EL FORMULARIO DE SETTINGS.
  const [state, setState] = useState<CreationTeamMember>({
    firstName: "",
    img: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    jobPosition: "",
    city: "",
    zipCode: "",
    address: "",
    appartment: "",
    joiningDate: "",
    timeSlotForDelivery: "",
    additionalInfo: "",
  });
  const handleInput = useCallback((key: string, value: unknown) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return (
    <Layout className="flex flex-col gap-6 pb-16 overflow-auto">
      <div className="flex w-full gap-6">
        <CompanyForm handleInput={handleInput} />
        <AccessForm handleInput={handleInput} />
      </div>
      <BillingForm handleInput={handleInput} />
      <div className="flex gap-6">
        <Card
          Title="Plan"
          className="w-1/2 flex flex-col px-8 gap-4"
          titleButton="Upgrade plan"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-md">Basic Plan</p>
                <span className="text-sm">Active</span>
              </div>
              <p className="font-medium text-md text-dark-grey">
                Our most popular plan for small teams
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-xl">$23200</span>
              <p className="text-sm font-inter">per month</p>
            </div>
          </div>
        </Card>

        <Card
          Title="Payment Method"
          className="w-1/2 flex flex-col gap-4 px-8 pb-8"
          titleButton="edit"
        >
          <div className="flex items-center gap-2">
            <div className="border p-2 border-grey rounded-md">
              <VisaIcon />
            </div>
            <p>Visa ending in 2376</p>
            <div className="w-[1px] h-6 bg-border"></div>
            <p>Expires 12/27</p>
          </div>
        </Card>
      </div>

      <section className="py-6 flex items-center justify-end">
        <Button
          body="Cancel"
          variant="secondary"
          className="mr-[20px] w-[200px] h-[40px] rounded-lg"
        />
        <Button
          body="Save"
          variant="primary"
          className="mr-[39px] w-[200px] h-[40px] rounded-lg"
        />
      </section>
    </Layout>
  );
}
