export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 items-center justify-between mt-16">
      <a
        href="mailto:albin.groen@gmail.com"
        className="text-3xl sm:text-4xl hover:underline text-center"
      >
        albin.groen@gmail.com
      </a>

      <p className="text-neutral-500 text-center">
        © {new Date().getFullYear()} Albin Groen
      </p>
    </footer>
  );
}
