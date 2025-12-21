'use client'

interface DentalLogoProps {
  className?: string
  size?: number
}

export default function DentalLogo({ className = '', size = 32 }: DentalLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Tooth */}
      <path
        d="M16 6C18.2091 6 20 7.79086 20 10V12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12V10C12 7.79086 13.7909 6 16 6Z"
        fill="currentColor"
      />
      <path
        d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16V20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20V16Z"
        fill="currentColor"
      />
      <path
        d="M10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V18Z"
        fill="currentColor"
      />
      <path
        d="M18 18C18 16.8954 18.8954 16 20 16C21.1046 16 22 16.8954 22 18V20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20V18Z"
        fill="currentColor"
      />
      <path
        d="M12 22C12 20.8954 12.8954 20 14 20C15.1046 20 16 20.8954 16 22V24C16 25.1046 15.1046 26 14 26C12.8954 26 12 25.1046 12 24V22Z"
        fill="currentColor"
      />
      <path
        d="M16 22C16 20.8954 16.8954 20 18 20C19.1046 20 20 20.8954 20 22V24C20 25.1046 19.1046 26 18 26C16.8954 26 16 25.1046 16 24V22Z"
        fill="currentColor"
      />
      {/* Toothbrush handle */}
      <rect x="4" y="24" width="24" height="3" rx="1.5" fill="currentColor" />
      {/* Bristles */}
      <rect x="8" y="25.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
      <rect x="10.5" y="25.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
      <rect x="13" y="25.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
      <rect x="15.5" y="25.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
      <rect x="18" y="25.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
      <rect x="20.5" y="25.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
    </svg>
  )
}
