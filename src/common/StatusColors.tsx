export const StatusColors = {
  pending: 'bg-lightPurple',
  info: "bg-lightBlue",
  warn: "bg-lightRed",
  success: "bg-lightGreen",
  error: "bg-red",
  disabled: "bg-disabled",

} as const;

export type StatusColor = keyof typeof StatusColors;

export type OrderStatus =
  | "CONFIRMATION PENDING"
  | "PAYMENT PENDING"
  | "ORDER CANCELED"
  | "ORDER CONFIRMED"
  | "CLOSED"
  | "OPEN"
  | "DELIVERED"
  | "MISSING DATA"
  | "PREPARING"
  | "AVAILABLE"
  | "SHIPPED";

export const StateColors: Record<OrderStatus, StatusColor> = {
  "CONFIRMATION PENDING": "pending",
  "PAYMENT PENDING": "warn",
  "ORDER CANCELED": "warn",
  "ORDER CONFIRMED": "success",
  CLOSED: "disabled",
  OPEN: "success",
  DELIVERED: "success",
  "MISSING DATA": "warn",
  PREPARING: "warn",
  AVAILABLE: "pending",
  SHIPPED: "success",
} as const;

export const JobPositionColors: Record<string, string> = {
  HR: "bg-pink-400",
  DEV: "bg-green", 
  QA: "bg-purple",
  SALES: "bg-yellow-200",
  DESIGN: "bg-red-200",
};

export type JobPosition = keyof typeof JobPositionColors;