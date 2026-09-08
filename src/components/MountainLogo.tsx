import type { SVGProps } from 'react'

export interface MountainLogoProps extends SVGProps<SVGSVGElement> {}

/**
 * Custom white mountain logo for the "snow" brand.
 * Rendered with stroke="currentColor" so it inherits the text color
 * (text-white) of its parent pill.
 */
export default function MountainLogo({
  className,
  ...props
}: MountainLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Three-peak mountain range with a snow line at the base */}
      <path d="M3 20L11 7L16 13L21 5L29 20" />
      <path d="M3 20H7M11 20H17M21 20H29" />
    </svg>
  )
}