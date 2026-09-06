export type Category = {
  id: string;
  label: string;
  /** Key into ICONS in components/category-icon.tsx */
  icon:
    | "gamepad"
    | "music"
    | "code"
    | "smile"
    | "book"
    | "film"
    | "camera"
    | "dumbbell"
    | "dots";
};

export const categories: Category[] = [
  { id: "gaming", label: "Gaming", icon: "gamepad" },
  { id: "music", label: "Music", icon: "music" },
  { id: "tech", label: "Tech", icon: "code" },
  { id: "comedy", label: "Comedy", icon: "smile" },
  { id: "education", label: "Education", icon: "book" },
  { id: "film", label: "Film", icon: "film" },
  { id: "vlog", label: "Vlog", icon: "camera" },
  { id: "fitness", label: "Fitness", icon: "dumbbell" },
  // Last on purpose: the fallback for anything the list above does not cover.
  { id: "other", label: "Other", icon: "dots" },
];

export const categoryIds = categories.map((c) => c.id);

export function categoryLabel(id: string): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}

export function isCategory(id: string): boolean {
  return categoryIds.includes(id);
}
