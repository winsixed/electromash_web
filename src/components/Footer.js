export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-gray-200 py-4 text-center text-sm text-gray-500"
    >
      © {new Date().getFullYear()} ООО «Электромашсервис» · ИНН 1657125708 · ОГРН 1121690086134 ·{' '}
      <a href="/privacy-policy" className="underline">
        Политика конфиденциальности
      </a>
    </footer>
  );
}
