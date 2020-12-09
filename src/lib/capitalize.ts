export function capitalize(value: string | string[]): string {
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
}
