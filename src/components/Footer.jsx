export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-forest/10">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Virestis. All plants &amp; socks reserved.
        </p>
      </div>
    </footer>
  );
}
