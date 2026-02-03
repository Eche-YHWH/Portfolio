"use client";
import { forwardRef } from "react";

const MenuIcon = forwardRef(({ className, size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
));

MenuIcon.displayName = "MenuIcon";

export { MenuIcon };
