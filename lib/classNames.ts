export default function classNames(
  ...classes: Array<string | boolean | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}
