import cx from "classnames";
import React from "react";
import { Loader } from "./loader";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "subtle" | "outlined" | "plain" | "text";
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "neutral";
  loading?: Boolean;
  onClick?: (event: any) => void;
  children?: React.ReactNode;
}

const baseClasses =
  "inline-flex items-center rounded-lg border font-medium focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-3 dark:ring-offset-neutral-1";

const sizeClasses = {
  "2xs": "px-3 py-1 space-x-2 text-xs",
  xs: "px-3.5 py-2 space-x-2 text-sm",
  sm: "px-4 py-2.5 space-x-2 text-sm",
  md: "px-4.5 py-2.5 space-x-2 text-base",
  lg: "px-5 py-3 space-x-2 text-base",
  xl: "px-7 py-4 space-x-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = "button",
  variant = "solid",
  color = "primary",
  size = "md",
  loading = false,
  ...props
}: ButtonProps) => {
  const colorClasses = {
    "border-transparent": true,

    // primary solid
    "bg-primary-9 text-white hover:bg-primary-10 active:bg-primary-11 focus:ring-primary-7":
      color === "primary" && variant === "solid",

    // primary subtle
    "bg-primary-a-4 text-primary-11 hover:bg-primary-a-5 active:bg-primary-a-6 focus:ring-primary-7":
      color === "primary" && variant === "subtle",

    // neutral solid
    "bg-neutral-12 text-neutral-1 hover:bg-neutral-12 active:bg-neutral-12/90 focus:ring-neutral-7":
      color === "neutral" && variant === "solid",

    // neutral subtle
    "bg-neutral-a-4 text-neutral-11 hover:bg-neutral-a-5 active:bg-neutral-a-6 focus:ring-neutral-7":
      color === "neutral" && variant === "subtle",
  };

  const buttonContent = (
    <>
      {children && <span>{children}</span>}

      {loading && <Loader />}
    </>
  );

  return (
    <button
      type={type}
      className={cx(baseClasses, sizeClasses[size], colorClasses)}
      {...props}
    >
      {buttonContent}
    </button>
  );
};
