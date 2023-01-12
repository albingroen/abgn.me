export default function Footer() {
  return (
    <footer className="flex items-center justify-between mt-16">
      <p className="text-neutral-500">
        © {new Date().getFullYear()} Albin Groen
      </p>
    </footer>
  );
}
