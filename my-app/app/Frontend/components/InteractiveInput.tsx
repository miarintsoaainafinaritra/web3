"use client";

import { InputHTMLAttributes, FocusEvent } from "react";

interface InteractiveInputProps extends InputHTMLAttributes<HTMLInputElement> {
  focusBorderColor?: string;
  normalBorderColor?: string;
  focusShadow?: string;
  normalShadow?: string;
}

export const InteractiveInput = ({
  focusBorderColor = "var(--primary)",
  normalBorderColor = "var(--border-strong)",
  focusShadow = "var(--shadow)",
  normalShadow = "var(--shadow-sm)",
  style,
  onFocus,
  onBlur,
  ...props
}: InteractiveInputProps) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = focusBorderColor;
    e.currentTarget.style.boxShadow = focusShadow;
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = normalBorderColor;
    e.currentTarget.style.boxShadow = normalShadow;
    onBlur?.(e);
  };

  return (
    <input
      style={style}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};
