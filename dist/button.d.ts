import React from "react";
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
export declare const Button: React.FC<ButtonProps>;
export {};
