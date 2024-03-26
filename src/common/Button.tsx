"use client";
import { MouseEvent, ReactNode } from "react";

type Size = keyof (typeof btnStyle)["size"];
type Variant = keyof (typeof btnStyle)["variant"];

interface ButtonProps {
  body?: ReactNode;
  variant?: Variant;
  icon?: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  size?: Size;
  children?: ReactNode;
}

const btnStyle = {
  variant: {
    primary: "bg-blue text-white from-blue to-green ",
    secondary: "bg-white border border-blue hover:bg-hoverBlue  text-blue ",
    delete: "bg-white border border-red-500 hover:bg-hoverRed  text-red-500 ",
    text: "bg-white text-blue hover:bg-hoverBlue rounded-full",
    alert: "text-error  hover:bg-hoverRed",
  },
  size: {
    default: "p-2",
    big: "text-lg py-3 px-6",
    small: "text-sm",
  },
  disabled: {
    primary: "bg-light-grey    text-grey ",
    delete: "bg-light-grey    text-grey ",
    secondary: "bg-white   text-grey ",
    text: "bg-white    text-grey   ",
    alert: "bg-white   text-grey ",
  },
} as const;

export function Button({
  body,
  variant = "primary",
  icon,
  className,
  disabled = false,
  onClick,
  size = "default",
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-center flex items-center justify-center gap-2 font-bold leading-5 capitalize transition-all duration-150 ease-in ${
        disabled
          ? `${btnStyle.disabled[variant]} ${btnStyle.size[size]}`
          : `${btnStyle.variant[variant]} ${btnStyle.size[size]}`
      } ${className || ""} `}
      {...buttonProps}
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {body}
        </>
      )}
    </button>
  );
}
