/**
 * Fills {placeholders}. Kept in its own module with no server imports so that
 * client components can use it without dragging `next/headers` into the
 * browser bundle.
 */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
