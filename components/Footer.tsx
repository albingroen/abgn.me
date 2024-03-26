export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 items-center justify-between mt-16">
      <a
        href="mailto:albingroen@proton.me"
        className="text-3xl sm:text-4xl hover:underline text-center"
      >
        albingroen@proton.me
      </a>

      <p className="text-neutral-500 text-center">
        © {new Date().getFullYear()} Albin Groen
      </p>
    </footer>
  );
}
