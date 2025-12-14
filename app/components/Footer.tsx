export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Top divider */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-[#737373]/30" />
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-[#737373]">
        <span>© {new Date().getFullYear()} Sree Krithi Farms</span>
      </div>
    </footer>
  );
}
