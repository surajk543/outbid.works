import type { Category } from "@/lib/categories";

const ICONS: Record<Category["icon"], React.ReactNode> = {
  gamepad: (
    <>
      <rect x="2" y="7" width="20" height="10" rx="4" />
      <path d="M7 11v2M6 12h2M16 11.5h.01M18 13.5h.01" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22Z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
    </>
  ),
  film: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M2 12h20M2 8h5M2 16h5M17 8h5M17 16h5" />
    </>
  ),
  camera: (
    <>
      <path d="m16 8 5-3v14l-5-3z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </>
  ),
  dumbbell: <path d="M6.5 6.5v11M3 9v6M17.5 6.5v11M21 9v6M6.5 12h11" />,
};

export function CategoryIcon({ name }: { name: Category["icon"] }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
