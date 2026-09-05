export type Cause = {
  id: string;
  label: string;
  /** Key into ICONS in components/cause-icon.tsx */
  icon: "bug" | "cash" | "eye" | "syringe" | "droplet" | "leaf";
};

export const causes: Cause[] = [
  { id: "malaria", label: "End malaria", icon: "bug" },
  { id: "poverty", label: "Fight extreme poverty", icon: "cash" },
  { id: "sight", label: "Save children's sight", icon: "eye" },
  { id: "vaccines", label: "Vaccinate every child", icon: "syringe" },
  { id: "water", label: "Clean water", icon: "droplet" },
  { id: "rainforest", label: "Protect rainforest", icon: "leaf" },
];
