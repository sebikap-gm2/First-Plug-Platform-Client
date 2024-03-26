import { OrderStatus } from "@/types";
import { OrderStateColors, StatusColors } from "./StatusColors";

export interface StateProps {
  status?: OrderStatus;
  message?: string;
}

export function OrderState({ status }: StateProps) {
  const colorClass = status
    ? `${StatusColors[OrderStateColors[status]]}`
    : "bg-disabled";

  const statusLength = status ? status.length : 0;

  return (
    <p
      className={`${colorClass}  py-1 rounded-full text-sm font-medium  border px-2`}
      style={{ width: `${statusLength + 2}ch` }}
    >
      {status}
    </p>
  );
}
