import type { Cause } from "@/lib/causes";

const ICONS: Record<Cause["icon"], React.ReactNode> = {
  bug: (
    <>
      <path d="M8 2 9.5 4M16 2 14.5 4" />
      <rect x="8" y="6" width="8" height="12" rx="4" />
      <path d="M3 10h5M16 10h5M3 16h5M16 16h5M12 6v12" />
    </>
  ),
  cash: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  syringe: (
    <>
      <path d="m18 2 4 4M20 4 8.5 15.5M13 5l6 6M7 12l5 5M9 20l-4-4-2 2 4 4Z" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10Z" />,
  leaf: (
    <>
      <path d="M20 4C10 4 4 9 4 16v4" />
      <path d="M4 16c0-6 5-9 16-9 0 8-6 12-11 12a5 5 0 0 1-5-3Z" />
    </>
  ),
};

export function CauseIcon({
  name,
  size = 16,
}: {
  name: Cause["icon"];
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      {ICONS[name]}
    </svg>
  );
}
