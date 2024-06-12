export default function includesTire(pathName: string): boolean {
  const category = pathName.toLowerCase();
  if (
    category.includes("dunlop") ||
    category.includes("strong") ||
    category.includes("remold")
  )
    return true;
  return false;
}
