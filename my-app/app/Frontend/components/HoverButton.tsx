"use client";

import { ButtonHTMLAttributes } from "react";

interface HoverButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hoverEffect?: "scale" | "color-change";
  primaryColor?: string;
  hoverColor?: string;
  children: React.ReactNode;
}

export const HoverButton = ({
  hoverEffect = "scale",
  primaryColor = "var(--primary)",
  hoverColor = "var(--primary-hover)",
  children,
  style,
  ...props
}: HoverButtonProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (hoverEffect === "scale") {
      e.currentTarget.style.transform = "scale(1.05)";
    } else if (hoverEffect === "color-change") {
      e.currentTarget.style.background = hoverColor;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (hoverEffect === "scale") {
      e.currentTarget.style.transform = "scale(1)";
    } else if (hoverEffect === "color-change") {
      e.currentTarget.style.background = primaryColor;
    }
  };

  return (
    <button
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};
