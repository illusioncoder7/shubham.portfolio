export default function Footer({ name }) {
  return (
    <footer className="text-center p-8 text-muted text-sm font-serif border-t border-border">
      <p>Designed &amp; built by {name}</p>
      <p className="mt-2 opacity-80">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
