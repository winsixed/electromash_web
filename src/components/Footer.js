export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-gray-200 py-4 text-center text-sm text-gray-500"
    >
      © {new Date().getFullYear()} ООО «Электромашсервис» &middot; ИНН
      1657125708 &middot; ОГРН 1121690086134 &middot;{' '}
      <a href="/privacy-policy" className="underline">
        Политика конфиденциальности
      </a>
    </footer>
  );
}
