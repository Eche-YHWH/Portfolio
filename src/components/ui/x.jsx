"use client";
import { forwardRef } from "react";

const XIcon = forwardRef(({ className, size = 24, ...props }, ref) => (
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
));

XIcon.displayName = "XIcon";

export { XIcon };
